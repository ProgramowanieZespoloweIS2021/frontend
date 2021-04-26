import { IOffer } from '@@types/models/Offer';
export {};

export const mockOffers: IOffer[] = [
    {
        id: 1,
        title: 'Best Website Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        creationTimestamp: new Date(),
        user: {
            firstName: 'John',
            surname: 'Doe',
            email: 'john@wp.pl',
        },
        thumbnails: [
            {
                id: 1,
                url:
                    'https://upload.wikimedia.org/wikipedia/commons/8/87/W3sDesign_Builder_Design_Pattern_UML.jpg',
            },
        ],
        tiers: [
            {
                title: 'First Tier',
                description: 'Super cool first tier',
                price: 17.65,
                deliveryTime: 7,
            },
            {
                title: 'Second Tier',
                description: 'Super cool second tier',
                price: 32.65,
                deliveryTime: 3,
            },
            {
                title: 'Third Tier',
                description: 'Super cool third tier',
                price: 52.14,
                deliveryTime: 2,
            },
        ],
        tags: [{ name: 'Java' }, { name: 'C#' }],
        archived: false,
    },
    {
        id: 2,
        title: 'Best Website Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        creationTimestamp: new Date(),
        user: {
            firstName: 'John',
            surname: 'Doe',
            email: 'john@wp.pl',
        },
        thumbnails: [
            {
                id: 1,
                url:
                    'https://upload.wikimedia.org/wikipedia/commons/8/87/W3sDesign_Builder_Design_Pattern_UML.jpg',
            },
        ],
        tiers: [
            {
                title: 'First Tier',
                description: 'Super cool first tier',
                price: 17.65,
                deliveryTime: 7,
            },
            {
                title: 'Second Tier',
                description: 'Super cool second tier',
                price: 32.65,
                deliveryTime: 3,
            },
            {
                title: 'Third Tier',
                description: 'Super cool third tier',
                price: 52.14,
                deliveryTime: 2,
            },
        ],
        tags: [{ name: 'Java' }, { name: 'C#' }],
        archived: false,
    },
    {
        id: 3,
        title: 'Best Website Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        creationTimestamp: new Date(),
        user: {
            firstName: 'John',
            surname: 'Doe',
            email: 'john@wp.pl',
        },
        thumbnails: [
            {
                id: 1,
                url:
                    'https://upload.wikimedia.org/wikipedia/commons/8/87/W3sDesign_Builder_Design_Pattern_UML.jpg',
            },
        ],
        tiers: [
            {
                title: 'First Tier',
                description: 'Super cool first tier',
                price: 17.65,
                deliveryTime: 7,
            },
            {
                title: 'Second Tier',
                description: 'Super cool second tier',
                price: 32.65,
                deliveryTime: 3,
            },
            {
                title: 'Third Tier',
                description: 'Super cool third tier',
                price: 52.14,
                deliveryTime: 2,
            },
        ],
        tags: [{ name: 'Java' }, { name: 'C#' }],
        archived: false,
    },
];
