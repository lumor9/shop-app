import { v4 } from 'uuid';

const productsInit = [
    {
        id: v4(),
        name: 'White Aesthetic Chair',
        description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        cost: '63.47',
        type: 'Chair'
    },
    {
        id: v4(),
        name: 'Modern Cupboard',
        description: 'Sleek white cupboard with 3 spacious shelves and soft-closing doors',
        cost: '149.99',
        type: 'Cupboard'
    },
    {
        id: v4(),
        name: 'Lounge Chair',
        description: 'Premium faux leather lounge chair with walnut legs and adjustable backrest',
        cost: '229.50',
        type: 'Chair'
    },
    {
        id: v4(),
        name: 'Executive Desk',
        description: 'Large L-shaped desk with cable management and scratch-resistant surface',
        cost: '349.00',
        type: 'Desk'
    },
    {
        id: v4(),
        name: 'Coffee Table',
        description: 'Round glass coffee table with golden metal base and tempered glass top',
        cost: '179.95',
        type: 'Table'
    },
    {
        id: v4(),
        name: 'Bookshelf',
        description: '5-tier industrial-style bookshelf made from reclaimed wood and black metal',
        cost: '129.99',
        type: 'Shelf'
    },
    {
        id: v4(),
        name: 'Dining Table Set',
        description: '6-seater dining table with 4 chairs and bench, rustic oak finish',
        cost: '599.00',
        type: 'Table'
    },
    {
        id: v4(),
        name: 'Sofa Bed',
        description: 'Convertible 3-seater sofa that transforms into queen-size bed with storage',
        cost: '499.99',
        type: 'Sofa'
    },
    {
        id: v4(),
        name: 'Nightstand',
        description: 'Minimalist nightstand with drawer and USB charging port, matte black',
        cost: '89.50',
        type: 'Stand'
    },
    {
        id: v4(),
        name: 'TV Stand',
        description: 'Mid-century modern TV stand with open shelving and cable holes',
        cost: '219.00',
        type: 'Stand'
    },
    {
        id: v4(),
        name: 'Bar Stool',
        description: 'Adjustable height bar stool with backrest and swivel function',
        cost: '75.25',
        type: 'Chair'
    },
    {
        id: v4(),
        name: 'Wardrobe',
        description: 'Sliding door wardrobe with mirror and 3 internal compartments',
        cost: '429.00',
        type: 'Cupboard'
    },
    {
        id: v4(),
        name: 'Office Chair',
        description: 'Ergonomic mesh office chair with lumbar support and tilt function',
        cost: '159.99',
        type: 'Chair'
    },
    {
        id: v4(),
        name: 'Console Table',
        description: 'Narrow entryway console table with drawer and bottom shelf',
        cost: '139.75',
        type: 'Table'
    },
    {
        id: v4(),
        name: 'Accent Chair',
        description: 'Velvet upholstered accent chair with gold metal legs',
        cost: '199.00',
        type: 'Chair'
    },
    {
        id: v4(),
        name: 'Dresser',
        description: '6-drawer dresser with brass handles and anti-tip hardware',
        cost: '289.50',
        type: 'Cupboard'
    },
    {
        id: v4(),
        name: 'Folding Table',
        description: 'Compact folding table that extends from 4 to 6 feet',
        cost: '119.99',
        type: 'Table'
    },
    {
        id: v4(),
        name: 'Patio Set',
        description: '4-piece outdoor patio set with weather-resistant wicker chairs',
        cost: '399.00',
        type: 'Set'
    },
    {
        id: v4(),
        name: 'Kids Study Desk',
        description: 'Adjustable height children\'s desk with storage cubbies',
        cost: '109.95',
        type: 'Desk'
    },
    {
        id: v4(),
        name: 'Display Cabinet',
        description: 'Glass-front display cabinet with LED lighting',
        cost: '279.00',
        type: 'Cupboard'
    },
    {
        id: v4(),
        name: 'Bench',
        description: 'Upholstered entryway bench with hidden storage compartment',
        cost: '149.00',
        type: 'Bench'
    }
];

const products = (state = productsInit) => {
    return state;
};

export default products;