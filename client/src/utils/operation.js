import { tezos } from "./tezos";

export const signupInvestor = async(
    investorDetailsCID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .investor_signup(
                investorDetailsCID
            )
            .send({
                amount: 50,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

export const signupCompany = async(
    startupDetailsCID,
    companyValuation
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .company_signup(
                startupDetailsCID,
                companyValuation
            )
            .send({
                amount: 50,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

/*
common_options sp.TNat  common_shares sp.TNat   fd_percent sp.TNat  fd_shares sp.TNat  investment sp.TMutez  preferred_shares sp.TNat  stakeHolder_name sp.TString  stakeHolder_profile_Id sp.TString  stakeHolder_type sp.Tstring
*/
export const addFounders = async(
    commonOptions,
    commonShares,
    investment,
    walletAddress,
    preferredShares,
    stakeHolderName,
    stakeHolderProfileId,
    stakeHolderType
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .add_member_to_company(
                commonOptions, commonShares, 0, 0, investment, walletAddress, preferredShares, stakeHolderName,
                stakeHolderProfileId, stakeHolderType
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


export const raiseFunds = async(
    investment, ownership, type
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .raise_fund_for_company(
                investment, ownership, type
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

// company_wallet = sp.TAddress, investment = sp.TMutez, valuation_cap = sp.TMutez, direct_equity = sp.TNat, type = sp.TString)
export const requestFromInvestor = async(companyWallet, directEquity, investment, type, valuationCap) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .request_from_investor(
                companyWallet, directEquity, investment, type, valuationCap
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

// change_message_hash
// sp.TRecord(company = sp.TAddress, investor = sp.TAddress, message_hash = sp.TString
export const changeMessageHash = async(companyAddress, investorAddress, messageHash) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .change_message_hash(
                companyAddress, investorAddress, messageHash
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const acceptOffer = async(investorAddress) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .accept_investor_request(
                investorAddress
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const investThroughSAFE = async(companyAddress, investorName, investmentAmount) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );
        console.log(companyAddress, investorName, investmentAmount);
        const op = await contract.methods
            .invest_through_SAFE(
                companyAddress, investorName
            )
            .send({
                amount: investmentAmount,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const investThroughDirectEquity = async(companyAddress, investorName, investmentAmount) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .invest_through_DirectEquity(
                companyAddress, investorName
            )
            .send({
                amount: investmentAmount,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const payEmp = async(amount, companyAddress, receiverWallet, tag) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .pay_from_company_wallet(
                amount, companyAddress, receiverWallet, tag
            )
            .send({
                amount: amount,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const payVndr = async(amount, companyAddress, receiverWallet, tag) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .pay_from_company_wallet(
                amount, companyAddress, receiverWallet, tag
            )
            .send({
                amount: amount,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

// "company_token:nat": "nat",
// "price_per_share:nat": "nat",
// "seller_wallet:address": "address",
// "shares:nat": "nat"
export const sellTokensInMarketplace = async(companyToken, pricePerShare, sellerWallet, shares) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .sell_shares(
                companyToken, pricePerShare, sellerWallet, shares
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const buyTokensInMarketplace = async(amountTokens, fromAddress, toAddress, tokenID, amount) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1Hm63JnL6ZCypjWgH4Xnr9tETpkbz48q5H"
        );

        const op = await contract.methods
            .token_transfer(
                amountTokens, fromAddress, toAddress, tokenID
            )
            .send({
                amount: amount,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}