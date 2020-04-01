import React from 'react';
import Employee from './Employee.js';

const employees = [
    {
        id: 1,
        firstName: "Bobby",
        lastName: "Hill",
        dob: "1996/05/21",
        department: "Opearations",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c84a53fd-f244-422d-8660-13949fbbca0a/d7gb3t5-2e49bc21-14ab-4753-8797-4d444577708c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9jODRhNTNmZC1mMjQ0LTQyMmQtODY2MC0xMzk0OWZiYmNhMGEvZDdnYjN0NS0yZTQ5YmMyMS0xNGFiLTQ3NTMtODc5Ny00ZDQ0NDU3NzcwOGMuanBnIn1dXX0._NFPxy44vAAngbgQzJ3a2ogk_nz1D2tdjwXCiM6SU9g"
    },
    {
        id: 2,
        firstName: "Hank",
        lastName: "Hill",
        dob: "1978/05/21",
        department: "Sales",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.playbuzz.com%2Fimage%2Fupload%2Ff_auto%2Cfl_lossy%2Cq_auto%2Fcdn%2F1da8a936-bf6e-4c45-849c-247b4b3c3892%2F457eed8e-badf-4cc6-859b-f424cee49742.jpg&f=1&nofb=1"
    },
    {
        id: 3,
        firstName: "Peggy",
        lastName: "Hill",
        dob: "1978/10/6",
        department: "Temp",
        img: "https://giantbomb1.cbsistatic.com/uploads/scale_small/0/7383/1813631-peggy_hill.jpg"
    }
];

const Directory = (props) => {
    //params.sort to send a desired filter

    return (
        <main className="container-fluid">
            <Employee persons={employees} />
        </main>
    );
    
}

export default Directory;