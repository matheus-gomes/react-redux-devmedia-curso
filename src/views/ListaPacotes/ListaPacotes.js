import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ListaPacotes extends Component {
    static propTypes = {
        pacotes: PropTypes.array.isRequired
    }

    render() {
        const { pacotes } = this.props

        return (
            <div>
                <p>fsdafsfdafa</p>
                <p>{JSON.stringify(pacotes, undefined, 2)}</p>
            </div>
        )
    }
}

// ListaPacotes.propTypes = {
//     pacotes: PropTypes.array
// }

const mapStateToProps = (state, ownProps) => ({
    pacotes: state.pacote
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListaPacotes)