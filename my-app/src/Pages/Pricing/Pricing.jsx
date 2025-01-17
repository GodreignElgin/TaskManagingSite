import React, { useState } from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const [showMore, setShowMore] = useState(false);

  const handleBillingChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Navbar/>
    <div className="pricing-container">
      <h1>
        <span className="blue-text">Simple, transparent pricing </span>
        <span className="white-text">for every team.</span>
      </h1>

      <div className="billing-cycle">
        <label>Bill me:</label>
        <button
          className={billingCycle === 'Monthly' ? 'active' : ''}
          onClick={() => handleBillingChange('Monthly')}
        >
          Monthly
        </button>
        <button
          className={billingCycle === 'Annually' ? 'active' : ''}
          onClick={() => handleBillingChange('Annually')}
        >
          Annually
        </button>
        <span>SAVE UP TO 17%</span>
      </div>

      <div className="plans">
        <div className="plan free">
          <div className="plan-free-up">
            <h2>Free</h2>
            <p>Free forever for 10 users</p>
            <p>$0</p>
            <ul>
              <li> Unlimited goals, projects, tasks, and forms</li>
              <li> Backlog, list, board, timeline, calendar, and summary views</li>
              <li> Reports and dashboards</li>
              <li> 100 automations available per month</li>
              <li> 2 GB of storage included</li>
              <li> Support available through community forums</li>
              <li> Suitable for up to 10 users</li>
              <li> 99.9% uptime SLA</li>
              <li> Customizable</li>
            </ul>
          </div>
          <div className="plan-free-down">
            <Link to="/login" className="cta-button">Get it free</Link>
          </div>
        </div>

        <div className="plan standard">
          <h2>Standard</h2>
          <p>Everything you need!!</p>
          <p>${billingCycle === 'Monthly' ? '7.16' : '6.67'} per user / month</p>
          <ul>
            <li> Everything from Free plus:</li>
            <li> User roles and permissions</li>
            <li> External collaboration</li>
            <li> Multi-region data residency</li>
            <li> 1,700 automations available per month</li>
            <li> 250 GB of storage</li>
            <li> 9/5 regional support</li>
            <li> Unlimited users</li>
            <li> 99.9% uptime SLA</li>
            <li> Customizable</li>
          </ul>
          <Link to="/signup" className="cta-button">Start free trial</Link>
        </div>

        <div className="plan premium">
          <h2>Premium</h2>
          <p>Align multiple teams</p>
          <p>${billingCycle === 'Monthly' ? '12.48' : '10.33'} per user / month</p>
          <ul>
            <li> Everything from Standard plus:</li>
            <li> Customizable approval processes</li>
            <li> Per user automation limits (1000 per month)</li>
            <li> Unlimited storage</li>
            <li> 24/7 support for critical issues</li>
            <li> 99.9% uptime SLA</li>
            <li> Cross-product insights with Analytics</li>
            <li> Unlimited Users</li>
            
          </ul>
          <Link to="/login" className="cta-button">Start free trial</Link>
        </div>

        <div className="plan enterprise">
          <h2>Enterprise</h2>
          <p>Advanced analytics, scale, and security for enterprises</p>
          <p>Contact sales</p>
          <ul>
            <li> Everything from Premium plus:</li>
            <li> Cross-product insights with Analytics</li>
            <li> Advanced admin controls and security</li>
            <li> Enterprise-grade identity and access management</li>
            <li> Unlimited automations</li>
            <li> 24/7 support for all issues</li>
            <li> 99.95% uptime SLA</li>
          </ul>
          <Link to="/login" className="cta-button">Start free trial</Link>
        </div>
      </div>

      <div className="data-center-card">
        <h2>Pricing for Data Center</h2>
        <p>Scale your teams while maintaining control of your environment with our self-managed option.</p>
        {showMore && (
          <p>Additional information about the Data Center pricing and features.</p>
        )}
        <button onClick={toggleShowMore}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>

      <div className="features-table">
        <h2>Bring all your teams into Manage-Mate</h2>
        <p>Give your teams space to grow with unlimited users, more storage, and flexible permissions.</p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Standard</th>
              <th>Premium</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User limit per site</td>
              <td>10 users</td>
              <td>50,000 users</td>
              <td>50,000 users</td>
              <td>50,000 users</td>
            </tr>
            <tr>
              <td>Number of sites</td>
              <td>1 site</td>
              <td>1 site</td>
              <td>1 site</td>
              <td>Up to 150</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>2 GB</td>
              <td>250 GB</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Email notifications</td>
              <td>100 emails/day</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="questions-section">
        <h2>Questions?</h2>
        <p>We have answers. Read our full list of common questions and answers for specific Manage-Mate pricing and licensing.</p>
      </section>

      <footer className="footer-container">
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Foundation</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Products</h2>
          <ul>
            <li><a href="#">Rovo</a></li>
            <li><a href="#">ManageMate</a></li>
            <li><a href="#">Align</a></li>
            <li><a href="#">Service Management</a></li>
            <li><a href="#">Confluence</a></li>
            <li><a href="#">Trello</a></li>
            <li><a href="#">Bitbucket</a></li>
            <li><a href="#">See all products</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li><a href="#">Technical support</a></li>
            <li><a href="#">Purchasing & licensing</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Create support ticket</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Learn</h2>
          <ul>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Training & certification</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Developer resources</a></li>
            <li><a href="#">Enterprise services</a></li>
            <li><a href="#">See all resources</a></li>
          </ul>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Pricing;
