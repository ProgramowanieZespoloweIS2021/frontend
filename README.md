# Frontend

Installation, package managers:
--
yarn
yarn start
Don't use npm commands.
When adding library, make sure its in right place (dependencies / devDependencies), @types to devDependencies

Files:
--
Components : Component.tsx
Styled: Component.styled.ts
logic: useComponent.ts

Styling:
--
Material UI for the win.
If there's something in Material UI - use it :D 
Use styled components only if necessary
Grid - multiplications of 4px (so margin 20, 40 etc)
Use ${({theme}) => theme.colors.black} , use theme values for colors, fontSizes, borderRadius etc.

Typescript:
--
interface starts with I
type, lowercase myType.
Don't use 'any'.

Components:
const Component: React.FC<IProps> = () => {}
export default Component.

React.FC (because it has typed children)
IProps for consistency. Always use IProps, even if its empty.
Destructure props here:  = ({ name, type }) => ...


Git flow:
--
git commit -m 'feat: add buttons'
branch name: 'feature/dashboard/add-buttons' / fix