import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="adam" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice blog!!!" 
                    avatar= {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="eve" 
                    timeAgo="Today at 2:40AM" 
                    content="Good one" 
                    avatar= {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="cain" 
                    timeAgo="Yesterday at 4:45PM" 
                    content="Superb" 
                    avatar= {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                here it will display props children
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));