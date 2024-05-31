import React from 'react'
import { Div } from './hero.styled'
export function CentreHero() {
    return (
        <main>
            <Div >
                <img
                    className="d-block mx-auto mb-4"
                    src="src/assets/thumbnail.jpeg"
                    alt=""
                />
                <h1 className="display-5 fw-bold">Dales View Riding Centre</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Dales View Riding Centre was started in 1992 by Mrs E.C. Heath.
                        At dales view riding centre tuition is offered in stable management, flat work, jumping and lungeing.
                        Riding lessons are available as private or shared private for all abilities from 7 yrs upwards.
                    </p>
                </div>
            </Div>
        </main>
    )
}

export function LeftHero() {
    return (
        <>
            <div className="b-example-divider" />
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="bootstrap-themes.png"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            Responsive left-aligned hero with image
                        </h1>
                        <p className="lead">
                            Quickly design and customize responsive mobile-first sites with
                            Bootstrap, the world’s most popular front-end open source toolkit,
                            featuring Sass variables and mixins, responsive grid system, extensive
                            prebuilt components, and powerful JavaScript plugins.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}