/*
 *
 * UserScreenshots
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectUserScreenshots from './selectors';
import Lightbox from 'react-images';
import {getScreenshots} from './actions';
import backend from 'utils/constant';

export class UserScreenshots extends React.Component { // eslint-disable-line react/prefer-stateless-function
  //state = {lightboxIsOpen:false}

  constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
    this.renderGallery = this.renderGallery.bind(this);

  }

  componentWillMount(){
    this.props.dispatch(getScreenshots(this.props.params.user))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user!=nextProps.params.user){
      this.props.dispatch(getScreenshots(nextProps.params.user))
    }

  }


	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

  gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

  gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

  gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}

	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}


  renderGallery (images) {
  		if (!images) return;

  		const gallery = images.map((obj, i) => {
  			return (
  				<a
  					href={obj.src}
  					key={i}
  					onClick={(e) => this.openLightbox(i, e)}

            className="w-25 dib pa1"
  				>
  					<img src={obj.thumbnail} className="w-100" />
  				</a>
  			);
  		});

  		return (
  			<div >
  				{gallery}
  			</div>
  		);
  	}

  render() {
    let {screenshots} = this.props;
/*
    let screenshots = [{
      URL:"http://localhost:8080/static/admin/2016-11-12T00:00:00+01:00/000002.png",
    },{
      URL:"http://localhost:8080/static/admin/2016-11-12T00:00:00+01:00/000002.png",
    },{
      URL:"http://localhost:8080/static/admin/2016-11-12T00:00:00+01:00/000002.png",
    },{
      URL:"http://localhost:8080/static/admin/2016-11-12T00:00:00+01:00/000001.png",
    },{
      URL:"http://localhost:8080/static/admin/2016-11-12T00:00:00+01:00/000001.png",
    },{
      URL:"http://localhost:8080/static/admin/2016-11-12T00:00:00+01:00/000001.png",
    }]*/
    console.log(screenshots)
    //console.log("sdfg")
    let images = screenshots.map((image)=>{
      return {
        src: backend()+"/"+image.URL,
        thumbnail: backend()+"/"+image.URL
      }
    })
    console.log(images)
    //let images = []

const theme = {
	// container
	container: { background: 'rgba(0, 0, 0, 0.7)' },

	// arrows
	arrow: {
		//backgroundColor: 'rgba(255, 255, 255, 0.8)',
		//fill: '#000',
    color:'rgba(255, 255, 255, 0.8)',
    opacity: 0.6,
		transition: 'opacity 200ms',

		':hover': {
			opacity: 1,
		},
	},
	arrow__size__medium: {
		borderRadius: 40,
		height: 40,
		marginTop: -20,

		'@media (min-width: 768px)': {
			height: 70,
			padding: 15,
		},
	},
	arrow__direction__left: { marginLeft: 10 },
	arrow__direction__right: { marginRight: 10 },

	// header
	close: {
    //backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color:'#fff',
		//fill: '#fff',
		opacity: 0.6,
		transition: 'all 200ms',

		':hover': {
			opacity: 1,
		},
	},

	// footer
	footer: {
		color: 'black',
	},
	footerCount: {
		color: 'rgba(0, 0, 0, 0.6)',
	},

	// thumbnails
	thumbnail: {
	},
	thumbnail__active: {
		boxShadow: '0 0 0 2px #00D8FF',
	},
};

    return (
      <div >
        <Helmet
          title="UserScreenshots"
          meta={[
            { name: 'description', content: 'Description of UserScreenshots' },
          ]}
        />
        {this.renderGallery(images)}
        <Lightbox
  					currentImage={this.state.currentImage}
  					images={images}
  					isOpen={this.state.lightboxIsOpen}
  					onClickImage={this.handleClickImage}
  					onClickNext={this.gotoNext}
  					onClickPrev={this.gotoPrevious}
  					onClickThumbnail={this.gotoImage}
  					onClose={this.closeLightbox}
  					showThumbnails={this.props.showThumbnails}
            theme={theme}
            showThumbnails={true}
            preloadNextImage={true}
            enableKeyboardInput={true}
  				/>
      </div>
    );
  }
}

const mapStateToProps = selectUserScreenshots();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreenshots);
