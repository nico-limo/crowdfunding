// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    /**
     * @dev Creates a new crowdfunding campaign and stores it in the `campaigns` mapping.
     * @param _owner The address of the owner of the campaign.
     * @param _title The title of the campaign.
     * @param _description The description of the campaign.
     * @param _target The target funding amount of the campaign.
     * @param _deadline The deadline for the campaign.
     * @param _image The image associated with the campaign.
     * @return The id of the created campaign.
     */

    // Struct to hold information about a campaign
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    // Mapping to hold all campaigns by their unique IDs
    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;

    /**
     * @dev Function to create a new campaign and add it to the mapping.
     */
    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        // Create a storage reference to the newly created campaign and initialize its properties
        Campaign storage campaign = campaigns[numberOfCampaigns];
        require(
            _deadline > block.timestamp,
            "The deadline should be a date in the future"
        );
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    /**
     * @dev Allows a user to donate to a campaign.
     * @param _id The id of the campaign.
     */
    function donateToCampaign(
        uint256 _id
    ) public payable notCampaignOwner(_id) {
        Campaign storage campaign = campaigns[_id];
        require(
            campaign.deadline > block.timestamp,
            "The campaign deadline has already passed"
        );

        uint256 amount = msg.value;
        require(
            campaign.amountCollected + amount <= campaign.target,
            "The campaign has already reached its funding target"
        );

        // Check if the donor has already donated to this campaign
        bool isDonator = false;
        for (uint i = 0; i < campaign.donators.length; i++) {
            if (campaign.donators[i] == msg.sender) {
                isDonator = true;
                campaign.donations[i] += amount;
                break;
            }
        }

        // If the donor hasn't already donated, add their address and donation amount to the campaign's arrays
        if (!isDonator) {
            campaign.donators.push(msg.sender);
            campaign.donations.push(amount);
        }

        // Send the donated amount to the campaign owner and update the amount collected by the campaign
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    /**
     * @dev Gets the donators and their donations for a campaign.
     * @param _id The id of the campaign.
     * @return The list of donators and their corresponding donations.
     */
    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    /**
     * @dev Gets all the campaigns created so far.
     * @return The list of campaigns.
     */
    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }

    /**
     * @dev Modifier to ensure that the campaign owner cannot donate to their own campaign.
     */
    modifier notCampaignOwner(uint256 _id) {
        require(
            msg.sender != campaigns[_id].owner,
            "The campaign owner cannot donate to their own campaign"
        );
        _;
    }
}
