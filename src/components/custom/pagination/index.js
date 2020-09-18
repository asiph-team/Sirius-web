import React from 'react'
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import classnames from 'classnames'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationSeprated = (props) => {
  const { data, pagination } = props
  const { current_page, total } = data

  return (
    <>
      <TabContent activeTab={'1'}>
        <TabPane tabId="1">
          <Pagination className="d-flex justify-content-center mt-3">
            <PaginationItem href="#" className="prev-item">
              <PaginationLink onClick={() => pagination(1, null)} href="#">
                <ChevronLeft />
                {' '}
              </PaginationLink>
            </PaginationItem>

            {(() => {
              const items = []
              for (let i = 1; i <= total; i++) {
                items.push(
                  <PaginationItem className={classnames({
                    active: current_page === i,
                  })}>
                    <PaginationLink onClick={() => pagination(i, null)} href="#">
                      {i}
                    </PaginationLink>
                  </PaginationItem>,
                )
              }
              return items
            })()}
            <PaginationItem href="#" className="next-item">
              <PaginationLink onClick={() => pagination(total, null)} href="#" last>
                <ChevronRight />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </TabPane>
      </TabContent>
    </>
  )
}

export default PaginationSeprated
