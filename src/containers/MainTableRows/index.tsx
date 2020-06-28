import React from 'react'

// Components
import MainTableRow from 'components/MainTableRow'

function MainTableRows() {

    const rows = [
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
        {class: 1, interval: [1, 5], xi: 3, fi: 2, fr: 4.16, fac: 2, facr: 4.16},
    ]

    return (
        <>
            {
                rows.map(row => (
                    <MainTableRow {...row}/>
                ))
            }
        </>
    )
}

export default MainTableRows