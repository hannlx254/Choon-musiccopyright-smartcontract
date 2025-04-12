// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title ChoonMusicPlatform
 * @dev A smart contract inspired by Choon's music platform model
 */
contract ChoonMusicPlatform {
    // Platform token for payments
    string public constant TOKEN_NAME = "NOTES";
    
    struct Artist {
        string name;
        string profileHash; // IPFS hash for artist profile data
        bool isRegistered;
        uint256 registrationDate;
        uint256 totalEarnings;
    }
    
    struct Track {
        string title;
        address artistAddress;
        string trackDataHash; // IPFS hash for track data
        uint256 uploadDate;
        uint256 streamCount;
        uint256 pricePerStream; // in wei
        bool isActive;
    }
    
    struct Playlist {
        string name;
        address creator;
        uint256 creationDate;
        bytes32[] trackIds;
    }
    
    // Mappings
    mapping(address => Artist) public artists;
    mapping(bytes32 => Track) public tracks;
    mapping(bytes32 => Playlist) public playlists;
    mapping(address => uint256) public balances;
    
    // Platform fee percentage (e.g., 10%)
    uint256 public platformFeePercent = 10;
    address public platformOwner;
    
    // Events
    event ArtistRegistered(address indexed artistAddress, string name);
    event TrackUploaded(bytes32 indexed trackId, string title, address indexed artist);
    event TrackStreamed(bytes32 indexed trackId, address indexed listener, uint256 payment);
    event PlaylistCreated(bytes32 indexed playlistId, string name, address indexed creator);
    event FundsWithdrawn(address indexed artist, uint256 amount);
    
    // Modified constructor to be payable
    constructor() payable {
        platformOwner = msg.sender;
        // If ETH is sent during deployment, it goes to the platform owner's balance
        if (msg.value > 0) {
            balances[platformOwner] += msg.value;
        }
    }
    
    /**
     * @dev Register as an artist on the platform
     * @param _name Artist name
     * @param _profileHash IPFS hash for artist profile data
     */
    function registerArtist(string memory _name, string memory _profileHash) public {
        require(!artists[msg.sender].isRegistered, "Artist already registered");
        
        artists[msg.sender] = Artist({
            name: _name,
            profileHash: _profileHash,
            isRegistered: true,
            registrationDate: block.timestamp,
            totalEarnings: 0
        });
        
        emit ArtistRegistered(msg.sender, _name);
    }
    
    /**
     * @dev Upload a new track to the platform
     * @param _title Track title
     * @param _trackDataHash IPFS hash for track data
     * @param _pricePerStream Price per stream in wei
     * @return trackId The ID of the uploaded track
     */
    function uploadTrack(string memory _title, string memory _trackDataHash, uint256 _pricePerStream) public returns (bytes32) {
        require(artists[msg.sender].isRegistered, "Only registered artists can upload tracks");
        
        bytes32 trackId = keccak256(abi.encodePacked(_title, msg.sender, block.timestamp));
        
        tracks[trackId] = Track({
            title: _title,
            artistAddress: msg.sender,
            trackDataHash: _trackDataHash,
            uploadDate: block.timestamp,
            streamCount: 0,
            pricePerStream: _pricePerStream,
            isActive: true
        });
        
        emit TrackUploaded(trackId, _title, msg.sender);
        return trackId;
    }
    
    /**
     * @dev Stream a track and pay the artist
     * @param _trackId ID of the track to stream
     */
    function streamTrack(bytes32 _trackId) public payable {
        Track storage track = tracks[_trackId];
        require(track.isActive, "Track is not active");
        require(msg.value >= track.pricePerStream, "Insufficient payment for streaming");
        
        // Calculate platform fee
        uint256 platformFee = (msg.value * platformFeePercent) / 100;
        uint256 artistPayment = msg.value - platformFee;
        
        // Update track data
        track.streamCount++;
        
        // Update artist earnings
        artists[track.artistAddress].totalEarnings += artistPayment;
        balances[track.artistAddress] += artistPayment;
        
        // Platform owner gets the fee
        balances[platformOwner] += platformFee;
        
        emit TrackStreamed(_trackId, msg.sender, msg.value);
    }
    
    /**
     * @dev Create a playlist
     * @param _name Playlist name
     * @param _trackIds Array of track IDs to include
     * @return playlistId The ID of the created playlist
     */
    function createPlaylist(string memory _name, bytes32[] memory _trackIds) public returns (bytes32) {
        bytes32 playlistId = keccak256(abi.encodePacked(_name, msg.sender, block.timestamp));
        
        playlists[playlistId] = Playlist({
            name: _name,
            creator: msg.sender,
            creationDate: block.timestamp,
            trackIds: _trackIds
        });
        
        emit PlaylistCreated(playlistId, _name, msg.sender);
        return playlistId;
    }
    
    /**
     * @dev Withdraw earnings from the platform
     */
    function withdrawEarnings() public {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No earnings to withdraw");
        
        balances[msg.sender] = 0;
        
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        
        emit FundsWithdrawn(msg.sender, amount);
    }
    
    /**
     * @dev Update platform fee percentage (only owner)
     * @param _newFeePercent New fee percentage
     */
    function updatePlatformFee(uint256 _newFeePercent) public {
        require(msg.sender == platformOwner, "Only platform owner can update fees");
        require(_newFeePercent <= 30, "Fee cannot exceed 30%");
        
        platformFeePercent = _newFeePercent;
    }
    
    /**
     * @dev Transfer platform ownership (only owner)
     * @param _newOwner Address of new owner
     */
    function transferPlatformOwnership(address _newOwner) public {
        require(msg.sender == platformOwner, "Only platform owner can transfer ownership");
        require(_newOwner != address(0), "New owner cannot be zero address");
        
        platformOwner = _newOwner;
    }
    
    /**
     * @dev Get track details
     * @param _trackId ID of the track
     */
    function getTrackDetails(bytes32 _trackId) public view returns (
        string memory title,
        address artistAddress,
        string memory trackDataHash,
        uint256 uploadDate,
        uint256 streamCount,
        uint256 pricePerStream,
        bool isActive
    ) {
        Track memory track = tracks[_trackId];
        return (
            track.title,
            track.artistAddress,
            track.trackDataHash,
            track.uploadDate,
            track.streamCount,
            track.pricePerStream,
            track.isActive
        );
    }
    
    /**
     * @dev Get playlist details
     * @param _playlistId ID of the playlist
     */
    function getPlaylistDetails(bytes32 _playlistId) public view returns (
        string memory name,
        address creator,
        uint256 creationDate,
        bytes32[] memory trackIds
    ) {
        Playlist memory playlist = playlists[_playlistId];
        return (
            playlist.name,
            playlist.creator,
            playlist.creationDate,
            playlist.trackIds
        );
    }
    
    /**
     * @dev Function to receive Ether
     */
    receive() external payable {
        balances[platformOwner] += msg.value;
    }
}