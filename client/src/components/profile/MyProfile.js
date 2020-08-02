import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import Spinner from '../common/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import ProfileActions from './ProfileActions';
import { Link } from 'react-router-dom';

class MyProfile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { profile, loading } = this.props.profile;
    
    let myprofileContent;

    if (profile === null || loading) {
      myprofileContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        myprofileContent = (
          <div>
            <ProfileActions />
            <ProfileHeader profile={profile} />
            <ProfileAbout profile={profile} />
            <div style={{ marginBottom: '30px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        myprofileContent = (
          <div>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{myprofileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(MyProfile);