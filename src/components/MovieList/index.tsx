import React, { useState } from 'react'
import MovieDetail from './MovieDetail'
import './style.scss'

type MovieListProps = {
    movies: any[]
}

export default function MovieList({ movies }: MovieListProps) {
    const [isDetail, setIsDetail] = useState<boolean>(false)
    const [id, setId] = useState<number>(0)

    const render = movies.map(item => {
        const onClick = () => {
            isDetail && id !== item.id ? setIsDetail(true) : setIsDetail(!isDetail)
            setId(item.id)
        }

        console.log('isDetail: '+isDetail)

      return (
        <div key={item.id}>
          <div className='movieTitle' onClick={onClick}>
            {item.title}
            <br/><a href={item.url}>바로가기</a>
          </div>
  
          { isDetail && item.id === id && <MovieDetail item={item} /> }
          <img src={item.large_cover_image} alt={item.title} /> 
        </div>
      )
    })

    return (
        <>
            {render}
        </>
    )
}
