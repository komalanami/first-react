export default function CoreConcept({image,title,description}) {
    return (
    <li>
        <img src={image} alt="{title}" />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
    )
}



// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt="{props.title}" />
//       <h3>{props.title}</h3>
//       <p>{props.descriptions}</p>
//     </li>
//   )
// }

// instead of props we can define like this above function 