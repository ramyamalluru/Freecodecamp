var Profile = React.createClass({
            getInitialState: function() {
                return {
                    camperData: [],
                    time: ""
                }
            },
            componentDidMount: function() {
                this.getRecentData();
            },
            getAllTimeData: function() {
                $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data) {
                    this.setState({
                        camperData: data,
                        time: "allTime"
                    });
                }.bind(this));
            },
            getRecentData: function() {
                $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data) {
                    this.setState({
                        camperData: data,
                        time: "recent"
                    });
                }.bind(this));
            },
            render: function() {
                var sort = this.state.camperData.map(function(ele, ind) {
                    return ( <
                        tr >
                        <
                        td > {
                            ind + 1
                        } < /td> <
                        td > < a href = {
                            "http://www.freecodecamp.com/" + ele.username
                        }
                        target = "_blank" > < img src = {
                            ele.img
                        }
                        /> {ele.username}</a > < /td> <
                        td > {
                            ele.recent
                        } < /td> <
                        td > {
                            ele.alltime
                        } < /td> <
                        /tr>
                    );
                });
                return ( <
                    div > < table className = "flow" >
                    <
                    th > # < /th> <
                    th > Campername < /th> <
                    th > < div onClick = {
                        this.getRecentData
                    } > Points in past 30 days {
                        this.state.time === "recent" ? '▼' : ''
                    } < /div></th >
                    <
                    th > < div onClick = {
                        this.getAllTimeData
                    } > Alltime points {
                        this.state.time === "allTime" ? '▼' : ''
                    } < /div></th >
                    <
                    tbody > {
                        sort
                    } <
                    /tbody> <
                    /table> <
                    /div>
                );
            }); React.render( < Profile / > , document.getElementById("app"));