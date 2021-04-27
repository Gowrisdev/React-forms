import React, {Component} from "react";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    
    const rows = props.CharacterData.map((item,index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>
                    <button onClick={ () => {props.removeCharacter(index)}}>Delete</button>
                </td>
            </tr>
        );
    });

    
    return (
        <tbody>
            {rows}
     
        </tbody>
    )
}

class Table extends React.Component{

    render(){
    const {CharacterData, removeCharacter} = this.props;

        return (
            <table>
            <TableHeader />
            <TableBody CharacterData ={CharacterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }

}

export default Table;