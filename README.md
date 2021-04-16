# eSzop offical frontend repo
## Poszczególne widoki appki wraz z funkcjonalnościami

### LandingPage, OffersList
path: /
info: 
- Landing page z statycznymi danymi
- Lista ofert, wraz z formularzem do wyszukiwania, sortowania, filtrowania
use: 
- offers-service
- wszystkie endpointy z GET od offers-service

### Login, Register
paths: /login, /register
info:
- formularze do logowania, rejestracji
- po udanej operacji redirect do głównego page'a

### OfferDetails
path: offers/:id
- offerDetails
Info:
- szczegóły oferty,
- tytuł, opis, fotki?, userName, oceny?
- poszczególne tiery z cenami
- button do kontaktu -> message, do dodania do koszyka
use:
- pobieramy wcześniej oferte i trzymamy do w store reduxowym
- pobieramy oferte korzystając z store 
- przekierowanie do /messages /cart

### OffersDashboard
path: /offersDashboard
info:
- edycja, CRUD na offertach
- CRUD na tierach do oferty, dynamiczny formularz,
- dodawanie tagów

### Cart
path: /cart
info:
- info o ofertach dodanych do koszyka
- usunięcie oferty
- zmiania wybranego tieru
- podsumowanie transakcji -> płatność

### Profile
path: /profile
info:
- dane o userze,
- zmiana danych
- jakiś button żeby przekierować na /profile/myOffers albo coś jak /myOffers /offersDashboard
- button do przekierowania na 

### OrdersDashboard
path: /orders
info:
- zamówione zrobione,
- zamówienia które ludzie zrobili u mnie
- przeniesienie stanu oferty do DONE

### Messages | Conversations
path: /messages | /conversations
info:
- lista konwersacji
- lista z jakąś paginacją?
use:
- GET /messages

path: /messages:id
- wyświetlanie konkretnej konwersacji z innym userem
- wysłanie wiadomości
- przeczytanie wiadomości
use:
- GET /messages/:id
- POST /messages


# Frontend
## Installation, package managers:

yarn
yarn start
Don't use npm commands.
When adding library, make sure its in right place (dependencies / devDependencies), @types to devDependencies

## Files:

Components : Component.tsx
Styled: Component.styled.ts
logic: useComponent.ts

## Styling:

Material UI for the win.
If there's something in Material UI - use it :D
Use styled components only if necessary
Grid - multiplications of 4px (so margin 20, 40 etc)
Use ${({theme}) => theme.colors.black} , use theme values for colors, fontSizes, borderRadius etc.

## Typescript:

interface starts with I
type, lowercase myType.
Don't use 'any'.

Components:
const Component: React.FC<IProps> = () => {}
export default Component.

React.FC (because it has typed children)
IProps for consistency. Always use IProps, even if its empty.
Destructure props here: = ({ name, type }) => ...

## Git flow:

git commit -m 'feat: add buttons'
branch name: 'feature/dashboard/add-buttons' / fix
