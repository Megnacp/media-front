import React, { useEffect, useState } from 'react'
import { gethistory } from '../service/allapi'



function Watchhistory() {

  const [history, sethistory] = useState([])
  useEffect(() => {
    getWatchhistory()


  }, [])



  const getWatchhistory = async () => {
    const {data} = await gethistory()
    sethistory(data);
  }

  console.log(history);


  return (
    <>
      <h1>Watch history</h1>

      <table className='table-shadow m-3 border rounded'>

        <thead>
          <tr>
            <th>ID</th>
            <th>CARD NAME</th>
            <th>URL</th>
            <th>DATE</th>
          </tr>
        </thead>

        <tbody>

          {
            history?.map((item, index) => (

              <tr>
                <td>{index + 1}</td>
                <td>{item?.cardname}</td>
                <td>{item?.url}</td>
                <td>{item?.Date}</td>
              </tr>
            ))
          }
        </tbody>


      </table>
    </>
  )
}

export default Watchhistory