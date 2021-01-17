import React from 'react';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import './SearchPage.css';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/commons/6/68/NEC_PC-8801.jpg"
                channel="Cpppp Cpppppppp"
                verified
                subs ="697k"
                noOfVideos={382}
                description="ddddddddddddddddddddddddddddddddddddddddddddd
                             ddddddddddddddddddddddddddddddddddddddddddddd
                             ddddddddddddddddddddddddddddddddddddddddddddd"
            />
            <hr/>

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/0/01/Norton_grape.jpg"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Strawberry_BNC.jpg"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/9/9b/Ornamentalpineapple.jpg"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Lettuce_Plugs.JPG"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/4/4f/Citrus_aurantifolia_Mexican_Lime.png"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/2/2f/Potatoe_var_Princess.jpg"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
            />

            <VideoRow
            views="1.4M"
            subs="659K"
            description="Wp Wpppppp WWWW Wpppp"
            timestamp="59 seconds ago"
            channel ="Cvv Cvvvvvvvvvv"
            title="Mmmm M m Mmmmmmmmmmm"
            image="https://upload.wikimedia.org/wikipedia/commons/b/ba/Rice_grains_%28IRRI%29.jpg"
            />
            
        </div>
    )
}

export default SearchPage
