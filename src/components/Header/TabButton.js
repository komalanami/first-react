// export default function TabButton({ label }) {
//     return <button>{label}</button>;
// }

// or
// export default function TabButton(props){
//     return <li><button>{ props.children}</button></li>;
// }

// or
export default function TabButton({ children , onSelect , isSelected}) {
    return (
        <li>
            <button className={isSelected? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}
