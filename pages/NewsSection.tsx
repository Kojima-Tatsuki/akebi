import React from 'react';

interface newsBoxProps {
    ImageLink: string,
    newsTitle: string,
    newsText: string
}

export function NewsBox(props: newsBoxProps) : JSX.Element {
    return (<li className="news-box">
        <a className="newx-box-link" href="/">
            <div className="news-box-title">{props.newsTitle}</div>
            <div className="news-box-image-container">
                <img className="news-box-image" src={props.ImageLink}></img>
            </div>
            <div className="news-text">
                <div className="news-para">
                    {props.newsText}
                </div>
            </div>
        </a>
    </li>);
}


export function NewsSection(): JSX.Element {
    const LinkOfAkebi1stBDImage = "https://pbs.twimg.com/media/FNtJDxRaAAMZaDY?format=jpg&name=medium";
    const LinkOfAkebi2ndBDImage = "https://pbs.twimg.com/media/FRQgg8GaAAAfrd4?format=jpg&name=4096x4096";
    const LinkOfAkebiTwitterIcon = "https://pbs.twimg.com/media/FPFj_ZcaAAIEy7R?format=jpg&name=large";

    return (
        <div className="news-section">
            <ul className="news-box-index">
                <NewsBox
                    ImageLink={LinkOfAkebi1stBDImage}
                    newsTitle="Bluelay and DVD 1巻情報"
                    newsText="「明日ちゃんのセーラー服」Blu-ray and DVD第1巻は4月27日(水)発売! https://akebi-chan.jp/bddvd/01.html" />
                <NewsBox
                    ImageLink={LinkOfAkebi2ndBDImage}
                    newsTitle="Bluelay and DVD 2巻情報"
                    newsText="「明日ちゃんのセーラー服」Blu-ray and DVD第2巻は5月25日(水)発売！ https://akebi-chan.jp/bddvd/02.html" />
            </ul>

            <div className="news-box-index">
                <div className="news-box-large">
                    <div className="news-box-title">公式Twitter</div>
                    <div className="news-twitter-box">
                        <a className="twitter-timeline" data-chrome="noheader nofooter" data-width="360" data-height="470" data-theme="light" href="https://twitter.com/AKEBI_chan?ref_src=twsrc%5Etfw">Tweets by AKEBI_chan</a>
                    </div>
                </div>
            </div>

            <ul className="news-box-index">
                <NewsBox
                    ImageLink={LinkOfAkebiTwitterIcon}
                    newsTitle="No Title"
                    newsText="No Text" />
                <NewsBox
                    ImageLink="https://pbs.twimg.com/media/FOv0GcnaIAM1KBS?format=jpg&name=large"
                    newsTitle="No Title"
                    newsText="No Text" />
            </ul>

            <ul className="news-box-index">
                <NewsBox
                    ImageLink={"https://pbs.twimg.com/media/FOB55hVVkAEYT0K?format=jpg&name=large"}
                    newsTitle="No Title"
                    newsText="No Text" />
                <NewsBox
                    ImageLink={"https://pbs.twimg.com/media/FNSn5sdaUAAPxlP?format=jpg&name=large"}
                    newsTitle="No Title"
                    newsText="No Text" />
            </ul>
        </div>);
}

