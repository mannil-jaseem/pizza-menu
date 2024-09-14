export interface ICreateMenu {
    MENU_NAME: string;
    DESCRIPTION: string;
    PRICE: number;
    SIZE: 'Small' | 'Medium' | 'Large',
    STATUS: boolean,
    TYPE: 'Food' | 'Drink',
    IMAGE: string;
}