/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Alert from 'react-bootstrap/Alert';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BsFillCalendarFill } from 'react-icons/bs';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../../node_modules/react-vertical-timeline-component/style.min.css';

class Rush extends React.Component {
  render() {
    const siteTitle = 'Theta Tau | SJSU';
    const { logo, rushSchedule } = this.props.data;
    return (
      <section>
        <Helmet title={siteTitle} />
        <NavBar />
        <section id="header" className="rush-background">
          <Img
            fluid={logo.childImageSharp.fluid}
            alt="Theta Tau Logo"
            style={{
              margin: 'auto',
              width: '17%',
              minWidth: '100px'
            }}
          />
          <h1>
            <strong>Rush</strong>
          </h1>
          <p>
            <b>Theta Tau SJSU Colony</b>
          </p>
          <div id="extend-height" />
        </section>

        <div className="rush">
          <section className="main style1 special">
            <div className="grid-wrapper">
              <div className="col-12">
                <Alert variant="danger">
                  <Alert.Heading>Applications for Spring 2020 are now closed.</Alert.Heading>
                  <p>
                    Please check us out again in Fall 2020!
                  </p>
                </Alert>
              </div>
            </div>
          </section>

          {/* <div className="grid-wrapper">
              <div className="col-12">
                <header className="major">
                  <h2>Rush Schedule</h2>
                </header>
                <span className="image fit">
                  <Img fluid={rushSchedule.childImageSharp.fluid} alt="Theta Tau Logo" />
                </span>
              </div>
            </div> */}

          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major special">
                <h2>Schedule</h2>
              </header>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Jan 29th, Wed 7PM"
                  iconStyle={{ background: 'rgb(128,0,0)', color: '#fff' }}
                  icon={<BsFillCalendarFill />}
                >
                  <h3 className="vertical-timeline-element-title">Info Night</h3>
                  <p>SU Meeting Room 1B</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Jan 30th, Thur 7PM"
                  iconStyle={{ background: 'rgb(128,0,0)', color: '#fff' }}
                  icon={<BsFillCalendarFill />}
                >
                  <h3 className="vertical-timeline-element-title">Game Night</h3>
                  <p>SU Meeting Room 2A</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Feb 5th, Wed 8:30PM"
                  iconStyle={{ background: 'rgb(128,0,0)', color: '#fff' }}
                  icon={<BsFillCalendarFill />}
                >
                  <h3 className="vertical-timeline-element-title">Alumni Speaker</h3>
                  <p>SU Meeting Room 4B</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Feb 6th, Thur 6PM"
                  iconStyle={{ background: 'rgb(128,0,0)', color: '#fff' }}
                  icon={<BsFillCalendarFill />}
                >
                  <h3 className="vertical-timeline-element-title">Yogurtland</h3>
                  <p>125 E San Carlos St</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>

          <section className="main style1 special">
            <div className="grid-wrapper">
              <div className="col-12">
                <header className="major">
                  <h2>FAQ</h2>
                </header>
              </div>
            </div>
            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: What is a Professional Fraternity?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  A professional fraternity is a brotherhood consisting chiefly
                  of individuals in a specific field of education, promoting
                  professional development in addition to strengthening
                  brotherly ties.
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: What are the Requirements to Rush?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  Rush is an opportunity for you to learn more about Theta Tau
                  by meeting both our active and graduated brothers. Rush
                  consists of multiple events that will give you a taste of what
                  our fraternity stands for, whether you are a good fit for us,
                  and whether we are a good fit for you. At the end of rush, we
                  extend a limited number of interviews and bids. Those who
                  receive bids can then decide whether or not they would like to
                  pledge. Rushing is completely free of charge and there are no
                  obligations.
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: Who can Rush?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  <li>Must be an SJSU student</li>
                  <li>Major must be Abet accredited </li>
                  <li>Must have a minimum 2.0 GPA </li>
                  <li>
                    Must have at least 2 semesters remaining at SJSU (one to
                    pledge and one to be an active brother)
                  </li>
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: Why join Theta Tau?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  {' '}
                  Whether you’re a freshman or a junior, Theta Tau offers many
                  benefits socially, professionally, and academically. Theta Tau
                  is a diverse group of engineers who grow close together while
                  striving towards similar goals. We believe that joining an
                  organization in which we can build lasting friendships, hone
                  our engineering and leadership skills, and give back to our
                  community will contribute to our growth as individuals both in
                  our professional and personal lives. We are committed to
                  fostering a welcoming, safe, and social environment, and we
                  invite you to join us!
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: Is Rush Mandatory to Apply?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  There are no attendance requirements in order to apply for the
                  pledge program. However, it is strongly encouraged for all
                  potential candidates to attend as many events as possible in
                  order for them to get to know the Chapter better and vice
                  versa.
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: What is Pledging?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  Pledging is a semester long process in which you will be given
                  the opportunity to show your character, skills, and leadership
                  to the _____ Chapter of Theta Tau. You and your pledge class
                  will be given a set of tasks to execute, each of which
                  embodies the 3 pillars of Theta Tau. The goals of assigning
                  these tasks are to develop critical academic and profesional
                  skills critical to one's career, as well as engage pledges in
                  long-lasting brotherhood.
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: What is a Bid?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  A bid is a formal invitation to begin pledging, the process of
                  becoming a brother.
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: How does Theta Tau decide who receives a Bid?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  Theta Tau searches for engineers who have a strong foundation
                  in its three pillars: Brotherhood, Professionalism, and
                  Service. We review each applicant as a whole (grades,
                  personality, professionalism, resume, etc.) to determine
                  whether we are the right fit for you.
                </p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>Q: Does Theta Tau Haze?</b>
                </h3>
              </div>
              <div className="col-12">
                <p>Theta Tau has a strict zero‐tolerance policy for hazing.</p>
              </div>
            </div>

            <div className="grid-wrapper left-text">
              <div className="col-12">
                <h3>
                  <b>
                    Q: If I don’t receive a bid, can I rush again the next
                    semester?
                  </b>
                </h3>
              </div>
              <div className="col-12">
                <p>
                  Yes! Oftentimes, it is the case that we have an abundance of
                  great potential members, and cannot extend bids to as many
                  members as we would like. We highly encourage that those who
                  do not receive bids to come back and rush again the following
                  semester.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </section>
    );
  }
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "thetatau.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rushSchedule: file(relativePath: { eq: "springrushschedule.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Rush;
