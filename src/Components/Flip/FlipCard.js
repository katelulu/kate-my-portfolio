import React from 'react'

<Row className="portfolio-main">
            {PortfolioData.map((item, index) => {
              const { title, link, img, cName } = item
              return (
                <Col className="portfolio-item" xs={12} md={6}>
                  <div className={cName}>
                    <a href={link} className="portfolio-link container">
                      <img src={img} alt="Portfolio" className="P-image" />
                      <div class="P-hMiddle">
                        <div className="P-hText">CLICK TO SEE MORE</div>
                      </div>
                    </a>
                  </div>
                  <h4 className="portfolio-title">{title}</h4>
                </Col>
              )
            })}
          </Row>

export default function Flip(item) {
    return (
        <div className="card">
            <div className='card-inner'>
                <div className='card-front'>
                 <img src={item.img}  alt="Portfolio" className="P-image"  />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Project Name:</strong> {item.title}
                        </li>
                        <li>
                            <strong>Visit:</strong> {item.epoch}
                        </li>
                        <li>
                            <strong>Code:</strong> {item.birth}
                        </li>
                        <li>
                            <strong>Death:</strong> {item.death}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


function ComposerGrid({ items }) {
    return (
      <div className="cards">
        {items.map((item) => (
          <Composers key={item.id} item={item} />
        ))}
      </div>
    );
  }
  
  export default ComposerGrid;
  