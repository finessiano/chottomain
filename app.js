// contract address on Kovan:
const rewardProgramAddress = '0xBbE7439a34F2c655a358e7B12115BF830185095a'

// add contract ABI:
const rewardProgramABI =

   [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountRaceTicket",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountVinyardTour",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountRolex",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_nftID",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "redeemer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum RewardManager.Reward",
				"name": "reward",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "NewRedemption",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "amountRaceTicket",
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
		"name": "amountRolex",
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
		"name": "amountVinyardTour",
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
		"name": "nftAddress",
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
				"internalType": "address",
				"name": "_addressToCheck",
				"type": "address"
			}
		],
		"name": "nftBalanceOf",
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
		"name": "nftID",
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
				"internalType": "enum RewardManager.Reward",
				"name": "_reward",
				"type": "uint8"
			}
		],
		"name": "redeemReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainingRaceTicket",
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
		"name": "remainingRolex",
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
		"name": "remainingVinyardTour",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await ethereum.request({ method: 'eth_requestAccounts'});
	const displayAddress = document.getElementById('mm-connect');

	const activeAddress = ethereum.selectedAddress ;
	const activeAddressFirstFour = activeAddress.substring(0,5);
	const activeAddressLastFour = activeAddress.substring(38,42);
	displayAddress.innerHTML = activeAddressFirstFour + "..." + activeAddressLastFour;

	const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
        rewardProgramContract.setProvider(window.ethereum);

	  var nftBalance = await rewardProgramContract.methods.nftBalanceOf(ethereum.selectedAddress).call();

	  if (nftBalance > 0) {
	  document.getElementById("landing-page-container2").style.display = "none";
	  document.getElementById("landing-page-state2").style.display = "inherit";
	  var reward1remaining = await rewardProgramContract.methods.remainingRaceTicket().call();
	    var reward2remaining = await rewardProgramContract.methods.remainingVinyardTour().call();
	    var reward3remaining = await rewardProgramContract.methods.remainingRolex().call();
	    if (reward1remaining == 0) {
	       document.getElementById("redeem-reward1").style.color = "var(--dl-color-gray-500)";
	       document.getElementById("redeem-reward1").style.borderColor = "var(--dl-color-gray-500)";
	       document.getElementById("redeem-reward1").disabled = true;
	       document.getElementById("redeem-reward1").style.pointerEvents = "none";     
	    }
	    if (reward2remaining == 0) {
	       document.getElementById("redeem-reward2").style.color = "var(--dl-color-gray-500)";
	       document.getElementById("redeem-reward2").style.borderColor = "var(--dl-color-gray-500)";
	       document.getElementById("redeem-reward2").disabled = true;
	       document.getElementById("redeem-reward2").style.pointerEvents = "none";     
	    }
	    if (reward3remaining == 0) {
	       document.getElementById("redeem-reward3").style.color = "var(--dl-color-gray-500)";
	       document.getElementById("redeem-reward3").style.borderColor = "var(--dl-color-gray-500)";
	       document.getElementById("redeem-reward3").disabled = true;
	       document.getElementById("redeem-reward3").style.pointerEvents = "none";     
	    }    
	  }

	  else {
	  document.getElementById("landing-page-container2").style.display = "inherit";
	  document.getElementById("landing-page-state2").style.display = "none";
	  }

      } else {
        console.log('window.ethereum is not found');
      }
})

window.ethereum.on('accountsChanged', function () {
  window.location.reload();
})

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'});

	const activeAddress = ethereum.selectedAddress;
	const activeAddressFirstFour = activeAddress.substring(0,5);
	const activeAddressLastFour = activeAddress.substring(38,42);
	mmEnable.innerHTML = activeAddressFirstFour + "..." + activeAddressLastFour;


  var web3 = new Web3(window.ethereum);
  const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
  rewardProgramContract.setProvider(window.ethereum);

  var nftBalance = await rewardProgramContract.methods.nftBalanceOf(ethereum.selectedAddress).call();

  if (nftBalance > 0) {
  document.getElementById("landing-page-container2").style.display = "none";
  document.getElementById("landing-page-state2").style.display = "inherit";
  var reward1remaining = await rewardProgramContract.methods.remainingRaceTicket().call();
    var reward2remaining = await rewardProgramContract.methods.remainingVinyardTour().call();
    var reward3remaining = await rewardProgramContract.methods.remainingRolex().call();
    if (reward1remaining == 0) {
       document.getElementById("redeem-reward1").style.color = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward1").style.borderColor = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward1").disabled = true;
       document.getElementById("redeem-reward1").style.pointerEvents = "none";     
    }
    if (reward2remaining == 0) {
       document.getElementById("redeem-reward2").style.color = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward2").style.borderColor = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward2").disabled = true;
       document.getElementById("redeem-reward2").style.pointerEvents = "none";     
    }
    if (reward3remaining == 0) {
       document.getElementById("redeem-reward3").style.color = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward3").style.borderColor = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward3").disabled = true;
       document.getElementById("redeem-reward3").style.pointerEvents = "none";     
    }    
  window.location.reload();
  }

  else {
  document.getElementById("landing-page-container2").style.display = "inherit";
  document.getElementById("landing-page-state2").style.display = "none";
  window.location.reload();
  }
  window.location.reload();
}

  const redeem1 = document.getElementById('redeem-reward1');
  redeem1.onclick = async () => {
  var web3 = new Web3(window.ethereum);
  const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
  rewardProgramContract.setProvider(window.ethereum);
  await rewardProgramContract.methods.redeemReward(0).send({from: ethereum.selectedAddress});
  var reward1remaining = await rewardProgramContract.methods.remainingRaceTicket().call();
	  if (reward1remaining == 0) {
       document.getElementById("redeem-reward1").style.color = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward1").style.borderColor = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward1").disabled = true;
       document.getElementById("redeem-reward1").style.pointerEvents = "none";     
  }

  const redeem2 = document.getElementById('redeem-reward2');
  redeem2.onclick = async () => {
  var web3 = new Web3(window.ethereum);
  const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
  rewardProgramContract.setProvider(window.ethereum);
  await rewardProgramContract.methods.redeemReward(1).send({from: ethereum.selectedAddress});
	  var reward2remaining = await rewardProgramContract.methods.remainingVinyardTour().call();
	  if (reward2remaining == 0) {
       document.getElementById("redeem-reward2").style.color = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward2").style.borderColor = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward2").disabled = true;
       document.getElementById("redeem-reward2").style.pointerEvents = "none";     
  }

  }

  const redeem3 = document.getElementById('redeem-reward3');
  redeem3.onclick = async () => {
  var web3 = new Web3(window.ethereum);
  const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
  rewardProgramContract.setProvider(window.ethereum);
  await rewardProgramContract.methods.redeemReward(2).send({from: ethereum.selectedAddress});
	  var reward3remaining = await rewardProgramContract.methods.remainingRolex().call();
	  if (reward3remaining == 0) {
       document.getElementById("redeem-reward3").style.color = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward3").style.borderColor = "var(--dl-color-gray-500)";
       document.getElementById("redeem-reward3").disabled = true;
       document.getElementById("redeem-reward3").style.pointerEvents = "none";     
  }

  }
