import React, { useState } from 'react'
import { skipPartiallyEmittedExpressions } from 'typescript'
import './style.scss'

type MovieDetailProps = {
    item: any
}

export default function MovieDetail({ item }: MovieDetailProps) {
    const movieRank = item.rating >= 9 ? 'movieRankGood' : item.rating >= 7 ? 'movieRankSoso' : 'movieRankBad' 
    const hotIcon = item.rating >= 9 && '🔥'
    const genres = item.genres.join(', ')
    const runtime = item.runtime + "min"|| "상영시간 정보없음"
    const summary = item.summary ? item.summary : item.synopsis

    const [isIidx, setIsIdx] = useState(0)

    const torrents = item.torrents.map((item: any, idx: number) => {
        const disIdx = idx + 1
        const copyUrl = (url: string, idx: number) => {
            navigator.clipboard.writeText(url)
            setIsIdx(idx)
            console.log('copyUrl ; ' + item.url)
        }
    

        return (
        <div>
            <button type="button" onClick={ () => copyUrl(item.url, disIdx)}>토렌트{disIdx}URL복사</button>
            <span className="coopyUrl"> { disIdx === isIidx ? '토렌트' + disIdx + 'URL복사' : ''  }</span>
        </div>
        )
    })
    
    const detail = (
        <div className='movieDetail'>
            <div>장르: {genres}</div>
            <div>러닝타임: {runtime}</div>
            <div><span>{hotIcon}</span> 평점 : <span className={movieRank}>{item.rating}</span> / 10</div>
            <div>{summary}</div>
            <div>{torrents}</div>
        </div>
    )

    return (
        <div>{detail}</div>
    )
}
