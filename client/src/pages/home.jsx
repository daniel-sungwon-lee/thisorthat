import React, { useEffect, useState } from 'react';
import Loading from '../components/loading';

export default function Home (props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="container">
      <h1>This or That</h1>

      <div>
        {
          loading ? <Loading />
                  : <div>

                    </div>
        }
      </div>

    </div>
  )
}
