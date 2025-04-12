// Contract ABI - Replace with your actual ABI after compiling the contract
const contractABI = [
    // This is a simplified ABI for demonstration
    // You need to replace this with the actual ABI from your compiled contract
    [
        {
            "inputs": [],
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "artistAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }
            ],
            "name": "ArtistRegistered",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "_trackIds",
                    "type": "bytes32[]"
                }
            ],
            "name": "createPlaylist",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "artist",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "FundsWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "playlistId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                }
            ],
            "name": "PlaylistCreated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_profileHash",
                    "type": "string"
                }
            ],
            "name": "registerArtist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_trackId",
                    "type": "bytes32"
                }
            ],
            "name": "streamTrack",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "trackId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "listener",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "payment",
                    "type": "uint256"
                }
            ],
            "name": "TrackStreamed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "trackId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "artist",
                    "type": "address"
                }
            ],
            "name": "TrackUploaded",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "transferPlatformOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_newFeePercent",
                    "type": "uint256"
                }
            ],
            "name": "updatePlatformFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_trackDataHash",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_pricePerStream",
                    "type": "uint256"
                }
            ],
            "name": "uploadTrack",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawEarnings",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "artists",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "profileHash",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isRegistered",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "registrationDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalEarnings",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_playlistId",
                    "type": "bytes32"
                }
            ],
            "name": "getPlaylistDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "creationDate",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "trackIds",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_trackId",
                    "type": "bytes32"
                }
            ],
            "name": "getTrackDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "artistAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "trackDataHash",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "uploadDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "streamCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pricePerStream",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "platformFeePercent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "platformOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "playlists",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "creationDate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "TOKEN_NAME",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "tracks",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "artistAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "trackDataHash",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "uploadDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "streamCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pricePerStream",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

// Contract address - Replace with your deployed contract address
const contractAddress = "0x695fb5b5b2e3519059ea4645c6c8d5f5d7557932"; // Replace with your contract address after deployment

// Global variables
let provider;
let signer;
let contract;
let userAccount;
let tracksList = [];
let playlistsList = [];

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const accountInfoDiv = document.getElementById('accountInfo');
const userAddressSpan = document.getElementById('userAddress');
const userBalanceSpan = document.getElementById('userBalance');
const statusMessageDiv = document.getElementById('statusMessage');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const registerArtistForm = document.getElementById('registerArtistForm');
const uploadTrackForm = document.getElementById('uploadTrackForm');
const streamTrackForm = document.getElementById('streamTrackForm');
const createPlaylistForm = document.getElementById('createPlaylistForm');
const viewPlaylistForm = document.getElementById('viewPlaylistForm');
const withdrawEarningsBtn = document.getElementById('withdrawEarnings');
const updateFeeBtn = document.getElementById('updateFee');
const transferOwnershipBtn = document.getElementById('transferOwnership');
const artistTracksDiv = document.getElementById('artistTracks');
const allTracksDiv = document.getElementById('allTracks');
const userPlaylistsDiv = document.getElementById('userPlaylists');
const playlistDetailsDiv = document.getElementById('playlistDetails');
const trackModal = document.getElementById('trackModal');
const modalTrackTitle = document.getElementById('modalTrackTitle');
const modalTrackArtist = document.getElementById('modalTrackArtist');
const modalTrackDate = document.getElementById('modalTrackDate');
const modalTrackStreams = document.getElementById('modalTrackStreams');
const modalTrackPrice = document.getElementById('modalTrackPrice');
const modalStreamTrackBtn = document.getElementById('modalStreamTrack');
const closeModalBtn = document.querySelector('.close');
const artistEarningsSpan = document.getElementById('artistEarnings');

// Initialize the application
window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        initApp();
    } else {
        showStatus('Please install MetaMask to use this application', 'error');
    }
});

// Initialize the application
async function initApp() {
    console.log("Initializing app...");

    // Set up direct event listener for connect button
    const connectBtn = document.getElementById('connectWallet');
    if (connectBtn) {
        console.log("Connect button found in initApp");
        connectBtn.onclick = connectWallet;
    } else {
        console.log("Connect button NOT found in initApp");
    }

    // Set up other event listeners
    if (registerArtistForm) registerArtistForm.addEventListener('submit', registerArtist);
    if (uploadTrackForm) uploadTrackForm.addEventListener('submit', uploadTrack);
    if (streamTrackForm) streamTrackForm.addEventListener('submit', streamTrack);
    if (createPlaylistForm) createPlaylistForm.addEventListener('submit', createPlaylist);
    if (viewPlaylistForm) viewPlaylistForm.addEventListener('submit', viewPlaylist);
    if (withdrawEarningsBtn) withdrawEarningsBtn.addEventListener('click', withdrawEarnings);
    if (updateFeeBtn) updateFeeBtn.addEventListener('click', updatePlatformFee);
    if (transferOwnershipBtn) transferOwnershipBtn.addEventListener('click', transferOwnership);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalStreamTrackBtn) modalStreamTrackBtn.addEventListener('click', streamTrackFromModal);

    // Set up tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to current tab
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Check if already connected
    if (window.ethereum && window.ethereum.selectedAddress) {
        console.log("Already connected to address:", window.ethereum.selectedAddress);
        await connectWallet();
    }
}

// Connect to MetaMask wallet
async function connectWallet() {
    console.log("Connect wallet function called");

    try {
        // Kiểm tra MetaMask
        if (typeof window.ethereum === 'undefined') {
            console.log("MetaMask not found");
            alert("Please install MetaMask extension to continue");
            window.open("https://metamask.io/download/", "_blank");
            return;
        }

        console.log("Requesting accounts...");
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Accounts received:", accounts);

        if (accounts.length === 0) {
            console.log("No accounts returned");
            showStatus('No accounts found. Please unlock MetaMask.', 'error');
            return;
        }

        userAccount = accounts[0];
        console.log("Selected account:", userAccount);

        // Set up ethers provider and contract
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        // Kiểm tra contract address
        if (!contractAddress || contractAddress === "0x695fb5b5b2e3519059ea4645c6c8d5f5d7557932") {
            console.log("Contract address not set");
            showStatus('Contract address not set. Please deploy your contract first.', 'error');
            return;
        }

        try {
            contract = new ethers.Contract(contractAddress, contractABI, signer);
        } catch (error) {
            console.error("Error creating contract instance:", error);
            showStatus('Error creating contract instance. Check ABI and address.', 'error');
            return;
        }

        // Update UI
        connectWalletBtn.style.display = 'none';
        accountInfoDiv.classList.remove('hidden');
        userAddressSpan.textContent = shortenAddress(userAccount);

        // Get and display user balance
        const balance = await provider.getBalance(userAccount);
        userBalanceSpan.textContent = ethers.utils.formatEther(balance);

        showStatus('Wallet connected successfully!', 'success');

        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountChange);
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showStatus('Failed to connect wallet: ' + error.message, 'error');
    }
}

// Handle account change
async function handleAccountChange(accounts) {
    if (accounts.length === 0) {
        // User disconnected their wallet
        resetUI();
    } else {
        // User switched accounts
        userAccount = accounts[0];
        userAddressSpan.textContent = shortenAddress(userAccount);

        // Reload data for new account
        loadArtistData();
        loadTracks();
        loadPlaylists();
    }
}

// Reset UI when wallet disconnects
function resetUI() {
    connectWalletBtn.style.display = 'block';
    accountInfoDiv.classList.add('hidden');
    artistTracksDiv.innerHTML = '<p class="empty-message">Your uploaded tracks will appear here</p>';
    allTracksDiv.innerHTML = '<p class="empty-message">Available tracks will appear here</p>';
    userPlaylistsDiv.innerHTML = '<p class="empty-message">Your playlists will appear here</p>';
}

// Register as an artist
async function registerArtist(event) {
    event.preventDefault();

    try {
        const name = document.getElementById('artistName').value;
        const profileHash = document.getElementById('profileHash').value;

        showStatus('Registering as artist...', 'info');

        const tx = await contract.registerArtist(name, profileHash);
        await tx.wait();

        showStatus('Successfully registered as artist!', 'success');
        loadArtistData();
    } catch (error) {
        console.error('Error registering artist:', error);
        showStatus('Failed to register: ' + error.message, 'error');
    }
}

// Upload a track
async function uploadTrack(event) {
    event.preventDefault();

    try {
        const title = document.getElementById('trackTitle').value;
        const trackDataHash = document.getElementById('trackDataHash').value;
        const pricePerStream = ethers.utils.parseEther(document.getElementById('pricePerStream').value);

        showStatus('Uploading track...', 'info');

        const tx = await contract.uploadTrack(title, trackDataHash, pricePerStream);
        const receipt = await tx.wait();

        // Get the trackId from the event logs
        const event = receipt.events.find(e => e.event === 'TrackUploaded');
        const trackId = event.args.trackId;

        showStatus(`Track uploaded successfully! Track ID: ${trackId}`, 'success');
        loadTracks();
    } catch (error) {
        console.error('Error uploading track:', error);
        showStatus('Failed to upload track: ' + error.message, 'error');
    }
}

// Stream a track
async function streamTrack(event) {
    event.preventDefault();

    try {
        const trackId = document.getElementById('streamTrackId').value;
        const amount = ethers.utils.parseEther(document.getElementById('streamAmount').value);

        showStatus('Processing stream payment...', 'info');

        const tx = await contract.streamTrack(trackId, { value: amount });
        await tx.wait();

        showStatus('Track streamed successfully!', 'success');
        loadTracks();
    } catch (error) {
        console.error('Error streaming track:', error);
        showStatus('Failed to stream track: ' + error.message, 'error');
    }
}

// Stream track from modal
async function streamTrackFromModal() {
    try {
        const trackId = modalStreamTrackBtn.getAttribute('data-track-id');
        const price = ethers.utils.parseEther(modalStreamTrackBtn.getAttribute('data-price'));

        showStatus('Processing stream payment...', 'info');

        const tx = await contract.streamTrack(trackId, { value: price });
        await tx.wait();

        showStatus('Track streamed successfully!', 'success');
        closeModal();
        loadTracks();
    } catch (error) {
        console.error('Error streaming track:', error);
        showStatus('Failed to stream track: ' + error.message, 'error');
    }
}

// Create a playlist
async function createPlaylist(event) {
    event.preventDefault();

    try {
        const name = document.getElementById('playlistName').value;
        const trackIdsString = document.getElementById('playlistTracks').value;
        const trackIds = trackIdsString.split(',').map(id => id.trim());

        showStatus('Creating playlist...', 'info');

        const tx = await contract.createPlaylist(name, trackIds);
        const receipt = await tx.wait();

        // Get the playlistId from the event logs
        const event = receipt.events.find(e => e.event === 'PlaylistCreated');
        const playlistId = event.args.playlistId;

        showStatus(`Playlist created successfully! Playlist ID: ${playlistId}`, 'success');
        loadPlaylists();
    } catch (error) {
        console.error('Error creating playlist:', error);
        showStatus('Failed to create playlist: ' + error.message, 'error');
    }
}

// View playlist details
async function viewPlaylist(event) {
    event.preventDefault();

    try {
        const playlistId = document.getElementById('playlistId').value;

        const details = await contract.getPlaylistDetails(playlistId);

        document.getElementById('viewPlaylistName').textContent = details.name;
        document.getElementById('playlistCreator').textContent = shortenAddress(details.creator);
        document.getElementById('playlistCreationDate').textContent = new Date(details.creationDate * 1000).toLocaleString();

        const tracksList = document.getElementById('playlistTracksList');
        tracksList.innerHTML = '';

        for (const trackId of details.trackIds) {
            const trackDetails = await contract.getTrackDetails(trackId);
            const li = document.createElement('li');
            li.textContent = `${trackDetails.title} by ${shortenAddress(trackDetails.artistAddress)}`;
            tracksList.appendChild(li);
        }

        playlistDetailsDiv.classList.remove('hidden');
    } catch (error) {
        console.error('Error viewing playlist:', error);
        showStatus('Failed to view playlist: ' + error.message, 'error');
    }
}

// Withdraw earnings
async function withdrawEarnings() {
    try {
        showStatus('Withdrawing earnings...', 'info');

        const tx = await contract.withdrawEarnings();
        await tx.wait();

        showStatus('Earnings withdrawn successfully!', 'success');
        loadArtistData();
    } catch (error) {
        console.error('Error withdrawing earnings:', error);
        showStatus('Failed to withdraw earnings: ' + error.message, 'error');
    }
}

// Update platform fee
async function updatePlatformFee() {
    try {
        const newFee = document.getElementById('platformFee').value;

        showStatus('Updating platform fee...', 'info');

        const tx = await contract.updatePlatformFee(newFee);
        await tx.wait();

        showStatus('Platform fee updated successfully!', 'success');
    } catch (error) {
        console.error('Error updating fee:', error);
        showStatus('Failed to update fee: ' + error.message, 'error');
    }
}

// Transfer platform ownership
async function transferOwnership() {
    try {
        const newOwner = document.getElementById('newOwner').value;

        showStatus('Transferring ownership...', 'info');

        const tx = await contract.transferPlatformOwnership(newOwner);
        await tx.wait();

        showStatus('Ownership transferred successfully!', 'success');
    } catch (error) {
        console.error('Error transferring ownership:', error);
        showStatus('Failed to transfer ownership: ' + error.message, 'error');
    }
}

// Load artist data
async function loadArtistData() {
    try {
        const artistData = await contract.artists(userAccount);
        const balance = await contract.balances(userAccount);

        if (artistData.isRegistered) {
            // Update UI to show artist is registered
            document.getElementById('registerArtistForm').innerHTML = `
                <div class="success-message">
                    <h3>You are registered as: ${artistData.name}</h3>
                    <p>Registration Date: ${new Date(artistData.registrationDate * 1000).toLocaleString()}</p>
                    <p>Total Earnings: ${ethers.utils.formatEther(artistData.totalEarnings)} ETH</p>
                </div>
            `;
        }

        artistEarningsSpan.textContent = ethers.utils.formatEther(balance);
    } catch (error) {
        console.error('Error loading artist data:', error);
    }
}

// Load tracks
async function loadTracks() {
    try {
        // This is a simplified approach - in a real app, you'd need to track all uploaded tracks
        // For demo purposes, we'll use events to get tracks
        const filter = contract.filters.TrackUploaded();
        const events = await contract.queryFilter(filter);

        tracksList = [];
        artistTracksDiv.innerHTML = '';
        allTracksDiv.innerHTML = '';

        if (events.length === 0) {
            artistTracksDiv.innerHTML = '<p class="empty-message">Your uploaded tracks will appear here</p>';
            allTracksDiv.innerHTML = '<p class="empty-message">No tracks available yet</p>';
            return;
        }

        let artistTracksCount = 0;

        for (const event of events) {
            const trackId = event.args.trackId;
            const details = await contract.getTrackDetails(trackId);

            tracksList.push({
                id: trackId,
                title: details.title,
                artist: details.artistAddress,
                uploadDate: details.uploadDate,
                streamCount: details.streamCount,
                price: details.pricePerStream,
                isActive: details.isActive
            });

            // Create track item for all tracks
            const trackItem = createTrackItem(trackId, details);
            allTracksDiv.appendChild(trackItem);

            // If this track belongs to the current user, add to artist tracks
            if (details.artistAddress.toLowerCase() === userAccount.toLowerCase()) {
                artistTracksDiv.appendChild(createTrackItem(trackId, details));
                artistTracksCount++;
            }
        }

        if (artistTracksCount === 0) {
            artistTracksDiv.innerHTML = '<p class="empty-message">Your uploaded tracks will appear here</p>';
        }
    } catch (error) {
        console.error('Error loading tracks:', error);
        showStatus('Failed to load tracks: ' + error.message, 'error');
    }
}

// Create a track item element
function createTrackItem(trackId, details) {
    const trackItem = document.createElement('div');
    trackItem.className = 'track-item';
    trackItem.setAttribute('data-track-id', trackId);

    const formattedPrice = ethers.utils.formatEther(details.pricePerStream);

    trackItem.innerHTML = `
        <div class="track-title">${details.title}</div>
        <div class="track-info">
            <div>Artist: ${shortenAddress(details.artistAddress)}</div>
            <div>Streams: ${details.streamCount}</div>
            <div>Price: ${formattedPrice} ETH</div>
        </div>
    `;

    trackItem.addEventListener('click', () => openTrackModal(trackId, details));

    return trackItem;
}

// Load playlists
async function loadPlaylists() {
    try {
        // This is a simplified approach - in a real app, you'd need to track all created playlists
        // For demo purposes, we'll use events to get playlists
        const filter = contract.filters.PlaylistCreated();
        const events = await contract.queryFilter(filter);

        playlistsList = [];
        userPlaylistsDiv.innerHTML = '';

        if (events.length === 0) {
            userPlaylistsDiv.innerHTML = '<p class="empty-message">Your playlists will appear here</p>';
            return;
        }

        let userPlaylistsCount = 0;

        for (const event of events) {
            const playlistId = event.args.playlistId;
            const details = await contract.getPlaylistDetails(playlistId);

            playlistsList.push({
                id: playlistId,
                name: details.name,
                creator: details.creator,
                creationDate: details.creationDate,
                trackIds: details.trackIds
            });

            // If this playlist belongs to the current user, add to user playlists
            if (details.creator.toLowerCase() === userAccount.toLowerCase()) {
                const playlistItem = document.createElement('div');
                playlistItem.className = 'playlist-item';

                playlistItem.innerHTML = `
                    <div class="playlist-title">${details.name}</div>
                    <div class="playlist-info">
                        <div>Tracks: ${details.trackIds.length}</div>
                        <div>Created: ${new Date(details.creationDate * 1000).toLocaleDateString()}</div>
                    </div>
                    <div class="playlist-id">ID: ${playlistId}</div>
                `;

                userPlaylistsDiv.appendChild(playlistItem);
                userPlaylistsCount++;
            }
        }

        if (userPlaylistsCount === 0) {
            userPlaylistsDiv.innerHTML = '<p class="empty-message">Your playlists will appear here</p>';
        }
    } catch (error) {
        console.error('Error loading playlists:', error);
        showStatus('Failed to load playlists: ' + error.message, 'error');
    }
}

// Open track modal
function openTrackModal(trackId, details) {
    modalTrackTitle.textContent = details.title;
    modalTrackArtist.textContent = shortenAddress(details.artistAddress);
    modalTrackDate.textContent = new Date(details.uploadDate * 1000).toLocaleString();
    modalTrackStreams.textContent = details.streamCount;
    modalTrackPrice.textContent = ethers.utils.formatEther(details.pricePerStream);

    modalStreamTrackBtn.setAttribute('data-track-id', trackId);
    modalStreamTrackBtn.setAttribute('data-price', ethers.utils.formatEther(details.pricePerStream));

    trackModal.style.display = 'block';
}

// Close modal
function closeModal() {
    trackModal.style.display = 'none';
}

// Show status message
function showStatus(message, type) {
    statusMessageDiv.textContent = message;
    statusMessageDiv.className = 'status-message';
    statusMessageDiv.classList.add(type);

    // Auto hide after 5 seconds
    setTimeout(() => {
        statusMessageDiv.style.display = 'none';
    }, 5000);
}

// Helper function to shorten address
function shortenAddress(address) {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target === trackModal) {
        closeModal();
    }
};

// Fix tab switching
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded, setting up tab buttons");
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            console.log("Tab clicked:", tabId);

            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to selected tab
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});