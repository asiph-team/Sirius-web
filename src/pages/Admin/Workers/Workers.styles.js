import styled from 'styled-components';
import { palette } from 'styled-theme';
import BoxComponent from '@sirius/components/utility/box';
import WithDirection from '@sirius/lib/helpers/rtl';

const BoxWrapper = styled(BoxComponent)`
  .isoInvoiceTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
    }
  }

  .bottomActions {
    display: flex;
    justify-content: flex-end;

    .mateAddInvoiceBtn{
      margin-right: 15px;
    }
  }

  #company {
    color: ${palette('text', 3)};
    font-weight: bold;
  }
`;

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;
  .isoSimpleTable {
    .invoiceViewBtn {
      font-size: 14px;
      padding: 10px;
      border: 0;
      margin: 0 10px;
      color: ${palette('text', 3)};
    }

    .invoiceDltBtn {
      font-size: 14px;
      padding: 10px;
      border: 0;
      color: ${palette('error', 0)};
    }
  }
`;

const Box = WithDirection(BoxWrapper);
export { Box };
export default WithDirection(CardWrapper);
