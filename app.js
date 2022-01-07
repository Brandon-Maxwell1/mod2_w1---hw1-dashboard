    class LeftBox extends React.Component {

        render (){
            return (            
                <div id="dashBox">
                    <ul>Dashboard</ul>
                    <ul>Widget</ul>
                    <ul>Reviews</ul>
                    <ul>Customers</ul>
                    <ul>Online Analysis</ul>
                    <ul>Settings</ul>
                </div>
            )
        }
    }

    class TopLeftBox extends React.Component {

        render() {
            return (
                <div id="revBox">
                    <h4>Reviews</h4>
                    <h2>1,281</h2>
                </div>

            )
        }
    }

    class TopMiddleBox extends React.Component {

        render() {
            return (  
                <div id="avgBox">
                    <h4>Average Rating</h4>
                    <h2>4.6</h2>
                </div>
            )
        }
    }

    class TopRightBox extends React.Component {

        render() {
            return (
                <div id="sentBox">
                    <h4>Sentiment Analysis</h4>
                    <ul>122</ul>
                    <ul>321</ul>
                    <ul>960</ul>
                </div>
            )
        }
    }

    class BottomOutterBox extends React.Component {

        render() {
            return (
                <div id="webBox">
                    <h4>Website Visitors</h4>
                    <h2>821</h2>
                    <div id="innerBox"></div>                   
                </div>
            )
        }
    }

    class BottomInnerBox extends React.Component {

        render() {
            return (
                <div></div>
            )
        }
    }
    
class App extends React.Component {

    render() {
    return(
        <div id="mainDiv">
            <LeftBox />
            <TopLeftBox />
            <TopMiddleBox />
            <TopRightBox />
            <BottomOutterBox />
            <BottomInnerBox />            
        </div>
    )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#main')
)

// ReactDOM.render(
//     <h1>Commence Dashboard Creation!</h1>,
//     document.querySelector('main')
//   );