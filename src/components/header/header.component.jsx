import React from 'react'; 

import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CollectionItem from '../collection-item/collection-item.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className='option' to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink className='option' to='/shop'>
                CONTACT
            </OptionLink>
            { currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); 
