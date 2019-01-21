export interface AssetContainer {
    title: string;
    currencyCode: string;
    orginalAmount: number;
    exchanceBalance: number;
}

export interface AssetType {
    title: string;
    totalAmount: number;
    hexColor: string;
    assetContainers: AssetContainer[];
}

export interface AssetContainer2 {
    title: string;
    currencyCode: string;
    orginalAmount: number;
    exchanceBalance: number;
}

export interface DebtAssetType {
    title: string;
    totalAmount: number;
    hexColor: string;
    assetContainers: AssetContainer2[];
}

export interface GetAssetsRootResponse {
    totalAmount: number;
    totalDebt: number;
    assetTypes: AssetType[];
    debtAssetTypes: DebtAssetType[];
}

