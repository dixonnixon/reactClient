import React from "react";

export default class Comment extends React.Component {
    render() {

        console.log(this.props.comment);
        return (
            <div id={this.props.comment}>
                {this.props.comment.comment},
                {this.props.comment.author},
                {this.props.comment.date}
                {new Intl.DateTimeFormat('en-US',
                    {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(Date.parse(this.props.comment.date)))}

            </div>
        );
    }
}