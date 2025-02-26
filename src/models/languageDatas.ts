interface langDataInterface {
    SideBar: {
        UsersBtn: string,
        StatsBtn: string
    }
    UserList: {
        tittle: string
    }
    UserPage: {
        tittle: string
        personalData: {
            tittle: string,
            name: string,
            surname: string,
            gender: string,
            phone: string,
            mail: string,
            age: string,
            birth_date: string,
            blood_group: string,
            adress: string,
            post_code: string,
            state: string
        }
        bankData: {
            tittle: string,
            expirationDate: string,
            cardNumber: string,
            cardType: string,
            currency: string,
            iban: string
        }
        jobInformation: {
            tittle: string,
            department: string,
            companyName: string
        }
    }
}

export const RusLangDatas: langDataInterface = {
    SideBar: {
        UsersBtn: 'Пользователи',
        StatsBtn: "Статистика"
    },
    UserList: {
        tittle: 'Пользователи'
    },
    UserPage: {
        tittle: 'Пользователь',
        personalData: {
            tittle: 'Персональные данные',
            name: "Имя",
            surname: "Фамилия",
            gender: "Пол",
            phone: "Номер телефона",
            mail: "Электронная почта",
            age: "Возраст",
            birth_date: "Дата рождения",
            blood_group: "Группа крови",
            adress: "Адрес",
            post_code: "Почтовый индекс",
            state: "Штат"
        },
        bankData: {
            tittle: "Банковские данные",
            expirationDate: "Срок действия карты",
            cardNumber: "Номер карты",
            cardType: "Тип карты",
            currency: "Валюта",
            iban: "IBAN",
        },
        jobInformation: {
            tittle: "Информация о месте работы",
            department: "Отдел",
            companyName: "Название организации",
        }
    },
}

export const EngLangDatas: langDataInterface = {
    SideBar: {
        UsersBtn: 'Users',
        StatsBtn: "Stats"
    },
    UserList: {
        tittle: 'Users'
    },
    UserPage: {
        tittle: 'User',
        personalData: {
            tittle: 'Personal data',
            name: "Name",
            surname: "Surname",
            gender: "gender",
            phone: "Phone Number",
            mail: "EMail",
            age: "Age",
            birth_date: "Birth date",
            blood_group: "Blood group",
            adress: "Address",
            post_code: "Postal code",
            state: "State"
        },
        bankData: {
            tittle: "Bank data",
            expirationDate: "Card expiration date",
            cardNumber: "Card number",
            cardType: "Card type",
            currency: "Currency",
            iban: "IBAN",
        },
        jobInformation: {
            tittle: "Information about the place of work",
            department: "Department",
            companyName: "Company name",
        }
    }
}