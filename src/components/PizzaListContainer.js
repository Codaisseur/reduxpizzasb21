import * as React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.PureComponent {
  selectPizza = (id) => {
    this.props.dispatch({
      type: 'SELECT_PIZZA',
      payload: id
    })
  }

  render() {
    return <PizzaList
      pizzas={this.props.pizzas}
      selectPizza={this.selectPizza}
    />
  }
}

const mapStateToProps = ({ pizzas }) => ({ pizzas })

export default connect(mapStateToProps)(PizzaListContainer)