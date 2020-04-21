
// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Header from '../header';
// import { successAction } from '../success/successAction';
// import { errorAction } from '../error/errorAction';
// import { getOrgInfo, getMyAccess } from '../organization/orgAction';
// import Success from '../success';
// import Error from '../error';
// import AccessControl from './AccessControl';


// export default function layoutWrapper(WrapperComponent, accessTypes = false) {
//     // eslint-disable-next-line react/prefer-stateless-function
//     class LayoutWrapper extends React.Component {
//         componentDidMount() {
//             this.props.dispatch(getOrgInfo());
//             this.props.dispatch(getMyAccess());
//         }
//         componentDidUpdate() {
//             const { success, error } = this.props;
//             // eslint-disable-next-line no-unused-expressions
//             (success != null || error != null) && setTimeout(this.changeStatus, 2000);
//         }
//         changeStatus = () => {
//             const { dispatch } = this.props;
//             dispatch(successAction(null));
//             dispatch(errorAction(null));
//         }
//         render() {
//             const { success, error } = this.props;

//             return (
//                 <React.Fragment>
//                     {
//                         success != null && <Success success={success} />
//                     }
//                     {
//                         error != null && <Error error={error} />
//                     }
//                     <Header />
//                     {
//                         accessTypes ?
//                             <AccessControl id={accessTypes}>
//                                 <WrapperComponent {...this.props} />
//                             </AccessControl>
//                             :
//                             <WrapperComponent {...this.props} />
//                     }
//                 </React.Fragment>
//             );
//         }
//     }

//     LayoutWrapper.defaultProps = {
//         success: null,
//         error: null,
//         lazyLoader: false,
//     };
//     LayoutWrapper.propTypes = {
//         success: PropTypes.string,
//         error: PropTypes.string,
//         lazyLoader: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//         dispatch: PropTypes.func.isRequired
//     };

//     const mapStateToProps = state => ({
//         success: state.success,
//         error: state.error,
//         lazyLoader: state.modal.lazyLoader
//     });

//     return connect(mapStateToProps)(LayoutWrapper);
// }

import React from 'react';
import Defaultheader from '../../src/Defaultheader';
import Venueheader from '../../src/VenueHeader';
import ListTraining from '../ListTraining';
import { connect } from 'react-redux';

export default function layoutWrapper(WrapperComponent){
    class LayoutWrapper extends React.Component{
        state={
            access:true
        }
        render(){
            return(
                <React.Fragment>
                    <Defaultheader />
                    <Venueheader />
                     {
                         this.state.access && 
                          <ListTraining />
                     }
                   
                </React.Fragment>
            )
        }
    }
    return connect()(LayoutWrapper)
    
}