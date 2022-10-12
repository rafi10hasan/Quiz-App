import React from 'react';
import { useLoaderData} from 'react-router-dom';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
           {
            topics.data.map(topic => <Topic
            
                key={topic.id}
                topic={topic}
                >

            </Topic>)
           }
        </div>
        </div>
    );
};

export default Topics;