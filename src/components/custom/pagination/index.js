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
  const { data, pagination, param, temp } = props
  const { current_page, last_page } = data
  let startPage = 0
  let endPage = 0
  let showArrows = true
  if (last_page <= 10) {
    showArrows = false
    startPage = 1
    endPage = last_page
  } else {
    if (current_page <= 6) {
      startPage = 1
      endPage = 10
    } else if (current_page + 4 >= last_page) {
      startPage = last_page - 9
      endPage = last_page
    } else {
      startPage = current_page - 5
      endPage = current_page + 4
    }
  }
  return (
    <>
      <TabContent activeTab={'1'}>
        <TabPane tabId="1">
          <Pagination className="d-flex justify-content-center mt-3">
            {
              showArrows && (
                <PaginationItem href="#" className="prev-item">
                  <PaginationLink onClick={() => pagination(1, { temp, param })} href="#">
                    <ChevronLeft />
                    {' '}
                  </PaginationLink>
                </PaginationItem>
              )
            }
            {(() => {
              const items = []
              for (let i = startPage; i <= endPage; i++) {
                items.push(
                  <PaginationItem className={classnames({
                    active: current_page === i,
                  })}>
                    <PaginationLink onClick={() => pagination(i, { temp, param })} href="#">
                      {i}
                    </PaginationLink>
                  </PaginationItem>,
                )
              }
              return items
            })()}
            {
              showArrows && (
                <PaginationItem href="#" className="next-item">
                  <PaginationLink onClick={() => pagination(last_page, { temp, param })} href="#" last>
                    <ChevronRight />
                  </PaginationLink>
                </PaginationItem>
              )
            }
          </Pagination>
        </TabPane>
      </TabContent>
    </>
  )
}

export default PaginationSeprated
