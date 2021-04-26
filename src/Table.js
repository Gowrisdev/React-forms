import React, {Component} from "react";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Sarah</td>
                <td>DevOps Developer</td>
            </tr>
            <tr>
                <td>John</td>
                <td>Cloud Engineer</td>
            </tr>
        </tbody>
    )
}

class Table extends React.Component{
    render(){
        return (
            <table>
            <TableHeader />
            <TableBody />
            </table>
        )
    }

}