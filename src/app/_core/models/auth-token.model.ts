export interface Locale {
    version: string;
    data: any;
}

export interface Update {
    hasNewVersion: boolean;
    isMandatory: boolean;
    isOptional: boolean;
    version: string;
    updateUrl: string;
}

export interface AuthTokenObj {
    token: string;
    encryptionKey: string;
    locale: Locale;
    expiresIn: number;
    patternMinLength: number;
    currentTime: Date;
    update: Update;
    checkMsisdn: boolean;
    timeout: number;
    mainPageCacheTimeout: number;
    isNotificationMenuVisible: boolean;
}



