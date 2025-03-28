export interface userModel {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: string,
    weight: string,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    ip: string,
    address: Address,
    macAddress: string,
    university: string,
    bank: UserBankData,
    company: UserCompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string,
    }
    role: string
}

interface Address {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: {
        lat: number,
        lng: number
    }
    country: string
}

interface UserBankData {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string,
}

interface UserCompany {
    department:string,
    name: string,
    title: string,
    address: {
        address: string
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
            lat: number,
            lng: number
        }
        country: string
    }
}

export interface ResponseModel {
    users: userModel[]
}