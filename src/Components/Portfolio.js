import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const PREFIX_URL = 'assets/img/portfolio/fullsize/';

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.images = [
            {
                original: 'assets/img/bg-masthead.jpg',
                thumbnail: 'assets/img/bg-masthead.jpg'
            }
        ].concat(this._getStaticImages());
    }
    _getStaticImages() {
        let images = [];
        for (let i = 1; i <= 11; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpeg`,
                thumbnail: `${PREFIX_URL}${i}.jpeg`
            });
        }

        return images;
    }



    render() {

        return (
            <div id="portfolio">
                <ImageGallery items={this.images} />
            </div>
        );
    }



    /*render() {
        return (

            <div id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpeg">
                                <img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpeg" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpeg">
                                <img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpeg" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpeg">
                                <img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpeg" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpeg">
                                <img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpeg" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpeg">
                                <img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpeg" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpeg">
                                <img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpeg" alt="" />
                                <div className="portfolio-box-caption p-3">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    */

}

export default Portfolio;