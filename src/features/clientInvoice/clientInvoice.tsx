import { t } from 'i18next';
import client_invoice_logo from '@/assets/imgs/client_invoice_logo.png';
import ksa_sign from '@/assets/imgs/currency_sign.png';
import './clientInvoice.css';
import { forwardRef } from 'react';
export const ClientInvoice = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section ref={ref} className='invoice-container'>
        <div className='invoice-header'>
          <img src={client_invoice_logo} alt='neckdemak client invoice logo' />
          <h1>{t('invoice.title')}</h1>
        </div>
        <section>
          <h2 className='invoice-subheader'>{t('invoice.invoice_data')}</h2>
          <div className='invoice-data-row-container'>
            <div className='invoice-data-row spaceX-104'>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.invoice_number')}</h3>
                <span className='invoice-data-item-value'>#5626546</span>
              </div>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.invoice_number')}</h3>
                <span className='invoice-data-item-value'>#5626546</span>
              </div>
            </div>

            <div className='invoice-data-row spaceX-68'>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.release_date')}</h3>
                <span className='invoice-data-item-value'>
                  {t('invoice.during_invoice_establishment')}
                </span>
              </div>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.invoice_status')}</h3>
                <span className='invoice-data-item-value'>{t('invoice.paid')}</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='invoice-subheader'>{t('invoice.client_data')}</h2>
          <div className='invoice-data-row-container'>
            <div className='invoice-data-row spaceX-47'>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.client_name')}</h3>
                <span className='invoice-data-item-value'>أحمد حسن</span>
              </div>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.phone_number')}</h3>
                <span className='invoice-data-item-value'>+96650231940</span>
              </div>

              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.e_mail')}</h3>
                <span className='invoice-data-item-value'>ahmedhassan@mycash.sa</span>
              </div>
            </div>

            <div className='invoice-data-row spaceX-35'>
              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.address')}</h3>
                <span className='invoice-data-item-value'>
                  {t('invoice.during_invoice_establishment')}
                </span>
              </div>

              <div className='invoice-data-item'>
                <h3 className='invoice-data-item-title'>{t('invoice.notes')}</h3>
                <span className='invoice-data-item-value'>{t('invoice.notes_not_found')}</span>
              </div>
            </div>
          </div>
        </section>

        <table>
          <thead className='table-header'>
            <tr className='header-row header-spaces !rounded-4xl'>
              <th>{t('invoice.product_name')}</th>
              <th>{t('invoice.quantity')}</th>
              <th>{t('invoice.price')}</th>
              <th>{t('invoice.total')}</th>
            </tr>
          </thead>

          <tbody>
            <tr className='body-row'>
              <td>Casio Watch</td>
              <td>1</td>
              <td className='ksa_currency_sign'>
                <span>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </td>
              <td className='ksa_currency_sign'>
                <span>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </td>
            </tr>

            <tr className='body-row'>
              <td>Casio Watch</td>
              <td>1</td>
              <td className='ksa_currency_sign'>
                <span>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </td>
              <td className='ksa_currency_sign'>
                <span>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </td>
            </tr>

            <tr className='body-row'>
              <td>Casio Watch</td>
              <td>1</td>
              <td className='ksa_currency_sign'>
                <span>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </td>
              <td className='ksa_currency_sign'>
                <span>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </td>
            </tr>
          </tbody>
        </table>

        <hr className='spaceX-content-fit spaceY' />

        <section>
          <div className='data-items-container'>
            <div className='data-item'>
              <h4>{t('invoice.discount')}</h4>
              <div className='ksa_currency_sign'>
                <span className='weight-400'>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </div>
            </div>

            <div className='data-item padding-8'>
              <h4>{t('invoice.shipping')}</h4>
              <h4 className='ksa_currency_sign'>
                <span className='weight-400'>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </h4>
            </div>

            <div className='data-item'>
              <h4>{t('invoice.subtotal')}</h4>
              <div className='ksa_currency_sign'>
                <span className='weight-400'>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </div>
            </div>

            <div className='data-item'>
              <h4>{t('invoice.total_tax')}</h4>
              <div className='ksa_currency_sign'>
                <span className='weight-400'>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </div>
            </div>

            <div className='data-item'>
              <h4>{t('invoice.total_invoice')}</h4>
              <div className='ksa_currency_sign'>
                <span className='sweight-400'>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </div>
            </div>

            <div className='data-item'>
              <h4>{t('invoice.paid_amount')}</h4>
              <div className='ksa_currency_sign'>
                <span className='weight-400'>500</span>
                <img src={ksa_sign} alt='Saudia Currency Logo' />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
);
