export const JobFormConst = {

    //form labels, options(states), error messages, general messages
        FirstName : {
            Label: 'FIRST NAME',
            PlaceHolder: 'i.e Micheal',
            ErrorMessage: 'Please enter a valid first name',
            Options : []
        },
        LastName : {
            Label: 'LAST NAME',
            PlaceHolder: 'i.e Jordan',
            ErrorMessage: 'Please enter a valid last name',
            Options : []
        },
        Street : {
            Label: 'STREET',
            PlaceHolder: 'i.e 123 martin st.',
            ErrorMessage: 'Please enter a valid street',
            Options : []
        },
        City : {
            Label: 'CITY',
            PlaceHolder: 'i.e los angeles',
            ErrorMessage: 'Please enter a valid city',
            Options : []
        },
        State : {
            Label: 'STATE',
            PlaceHolder: '',
            ErrorMessage: 'Please enter a valid state',
            Options : { 'US' : [ '','AK',
            'AL',
            'AR',
            'AS',
            'AZ',
            'CA',
            'CO',
            'CT',
            'DC',
            'DE',
            'FL',
            'GA',
            'GU',
            'HI',
            'IA',
            'ID',
            'IL',
            'IN',
            'KS',
            'KY',
            'LA',
            'MA',
            'MD',
            'ME',
            'MI',
            'MN',
            'MO',
            'MS',
            'MT',
            'NC',
            'ND',
            'NE',
            'NH',
            'NJ',
            'NM',
            'NV',
            'NY',
            'OH',
            'OK',
            'OR',
            'PA',
            'PR',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VA',
            'VI',
            'VT',
            'WA',
            'WI',
            'WV',
            'WY'] ,
            'CAN' : ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory']

        }},
        ZipCode : {
            Label: 'ZIP CODE',
            PlaceHolder: 'i.e 22312',
            ErrorMessage: 'Please enter a valid zip code (i.e 22312)',
            Options : []
        },
        Country : {
            Label: 'COUNTRY',
            PlaceHolder: '',
            ErrorMessage: 'Please enter a valid country',
            Options : ['','UNITED STATES', 'CANADA']
        },
        Position : {
            Label: 'POSITION',
            PlaceHolder: '',
            ErrorMessage: 'Please pick a position',
            Options : ['Front-End Developer','Back-End Developer', 'DevOps', 'DataBase Administrator'] //later up to get avail positions from web service 
        },
        YearsOfExperience : {
            Label: 'YEARS OF EXPERIENCE',
            PlaceHolder: 'i.e 4',
            ErrorMessage: 'Please enter a valid # of years',
            Options : []
        }

}
