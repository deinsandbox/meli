export const mockCategories = {
  ok: {},
  error: {},
}

mockCategories.ok = {
  id: 'MLA90306',
  name: 'Carpas Infantiles',
  picture: null,
  permalink: null,
  total_items_in_this_category: 1910,
  path_from_root: [
    {
      id: 'MLA1132',
      name: 'Juegos y Juguetes',
    },
    {
      id: 'MLA433060',
      name: 'Casas y Carpas para Niños',
    },
    {
      id: 'MLA90306',
      name: 'Carpas Infantiles',
    },
  ],
  children_categories: [],
  attribute_types: 'variations',
  settings: {
    adult_content: false,
    buying_allowed: true,
    buying_modes: ['buy_it_now', 'auction'],
    catalog_domain: 'MLA-KIDS_TENTS',
    coverage_areas: 'not_allowed',
    currencies: ['ARS'],
    fragile: false,
    immediate_payment: 'required',
    item_conditions: ['not_specified', 'used', 'new'],
    items_reviews_allowed: false,
    listing_allowed: true,
    max_description_length: 50000,
    max_pictures_per_item: 12,
    max_pictures_per_item_var: 10,
    max_sub_title_length: 70,
    max_title_length: 60,
    max_variations_allowed: 100,
    maximum_price: null,
    maximum_price_currency: 'ARS',
    minimum_price: 500,
    minimum_price_currency: 'ARS',
    mirror_category: null,
    mirror_master_category: null,
    mirror_slave_categories: [],
    price: 'required',
    reservation_allowed: 'not_allowed',
    restrictions: [],
    rounded_address: false,
    seller_contact: 'not_allowed',
    shipping_options: ['custom', 'carrier'],
    shipping_profile: 'optional',
    show_contact_information: false,
    simple_shipping: 'optional',
    stock: 'required',
    sub_vertical: 'toys',
    subscribable: false,
    tags: [],
    vertical: 'toys_babies',
    vip_subdomain: 'articulo',
    buyer_protection_programs: ['delivered', 'undelivered'],
    status: 'enabled',
  },
  channels_settings: [
    {
      channel: 'mshops',
      settings: {
        minimum_price: 0,
      },
    },
    {
      channel: 'proximity',
      settings: {
        status: 'disabled',
      },
    },
    {
      channel: 'mp-merchants',
      settings: {
        buying_modes: ['buy_it_now'],
        immediate_payment: 'required',
        minimum_price: 1,
        status: 'enabled',
      },
    },
    {
      channel: 'mp-link',
      settings: {
        buying_modes: ['buy_it_now'],
        immediate_payment: 'required',
        minimum_price: 1,
        status: 'enabled',
      },
    },
  ],
  meta_categ_id: null,
  attributable: false,
  date_created: '2018-04-25T08:12:56.000Z',
}

mockCategories.error = {
  data: {},
  error: 'not_found',
}
