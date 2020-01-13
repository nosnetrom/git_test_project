class Hello extends Component{
    render() {
        let now = new Date();
        return(
            <span>Hello at {now}!</span>
        )
    }
}
export default Hello;