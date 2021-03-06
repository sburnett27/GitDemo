$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sif.demo-org/003-customer-pickup-e2e.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Pickup E2E flow",
  "description": "",
  "id": "customer-pickup-e2e-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4636300,
  "status": "passed"
});
formatter.before({
  "duration": 363600,
  "status": "passed"
});
formatter.before({
  "duration": 262100,
  "status": "passed"
});
formatter.before({
  "duration": 320800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Customer Pickup E2E Flow",
  "description": "",
  "id": "customer-pickup-e2e-flow;customer-pickup-e2e-flow",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@scenario"
    },
    {
      "line": 3,
      "name": "@functionality\u003csif\u003e\u003ccustomerpickup\u003e"
    },
    {
      "line": 3,
      "name": "@confirmed"
    },
    {
      "line": 3,
      "name": "@jira\u003cSIF-1\u003e"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "login as super user",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "generate random number variables",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Role with following data is persisted",
  "rows": [
    {
      "cells": [
        "OrganizationId",
        "RoleId",
        "RoleName",
        "RoleType.RoleTypeId",
        "RoleType.RoleTypeName",
        "RoleType.RoleTypeDescription",
        "IsActive"
      ],
      "line": 11
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "Store Manager",
        "UserDefined",
        "User Defined Role",
        "User Defined Role",
        "true"
      ],
      "line": 12
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "Store Associate",
        "UserDefined",
        "User Defined Role",
        "User Defined Role",
        "true"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the Grant with following data is persisted",
  "rows": [
    {
      "cells": [
        "OrganizationId",
        "RoleId",
        "ResourceId"
      ],
      "line": 16
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "storefacade::*"
      ],
      "line": 17
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "ui-fulfillment::*"
      ],
      "line": 18
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "ui-inventory::*"
      ],
      "line": 19
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "fulfillment::*"
      ],
      "line": 20
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "sim::*"
      ],
      "line": 21
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "pathoptimization::*"
      ],
      "line": 22
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "organization::grant::read-getlistforuser"
      ],
      "line": 23
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "organization::provisioningprofile::read"
      ],
      "line": 24
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "storefacade::*"
      ],
      "line": 25
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "api::storefacade::*"
      ],
      "line": 26
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "ui-fulfillment::*"
      ],
      "line": 27
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "ui-inventory::*"
      ],
      "line": 28
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "fulfillment::*"
      ],
      "line": 29
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "sim::*"
      ],
      "line": 30
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "pathoptimization::*"
      ],
      "line": 31
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "organization::grant::read-getlistforuser"
      ],
      "line": 32
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "organization::provisioningprofile::read"
      ],
      "line": 33
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "parcel::*"
      ],
      "line": 34
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "api::fulfillment::updatepickupfulfillmentsandnotify::admin"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the User with following data is persisted",
  "rows": [
    {
      "cells": [
        "PrimaryOrgId",
        "UserId",
        "UserTimeZone",
        "IdentityType.IdentityTypeId",
        "IdentityType.IdentityTypeName",
        "UserType.UserTypeId",
        "DateOfBirth",
        "Gender",
        "Address.Address1",
        "Address.Address2",
        "Address.City",
        "Address.State",
        "Address.PostalCode",
        "Address.Country",
        "Address.Phone",
        "Address.Email",
        "Email2",
        "Password"
      ],
      "line": 38
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "strmgr${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "US/Eastern",
        "Database",
        "Database",
        "Human",
        "1980-06-10",
        "Male",
        "2300 Windy Ridge Pkwy",
        "10th Floor",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "(770) 955-7070",
        "orgadmin@manh.com",
        "mg@gmail.com",
        "Password2@"
      ],
      "line": 39
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "US/Eastern",
        "Database",
        "Database",
        "Human",
        "1980-06-10",
        "Male",
        "2300 Windy Ridge Pkwy",
        "10th Floor",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "(770) 955-7070",
        "orgadmin@manh.com",
        "mg@gmail.com",
        "Password2@"
      ],
      "line": 40
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "strassociate2${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "US/Eastern",
        "Database",
        "Database",
        "Human",
        "1980-06-10",
        "Male",
        "2300 Windy Ridge Pkwy",
        "10th Floor",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "(770) 955-7070",
        "orgadmin@manh.com",
        "mg@gmail.com",
        "Password2@"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the UserRole with following data is persisted",
  "rows": [
    {
      "cells": [
        "OrganizationId",
        "RoleId",
        "UserId",
        "RoleOrgId"
      ],
      "line": 44
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrMgr",
        "strmgr${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "${org.sif-Child-Kering-B1-IT}"
      ],
      "line": 45
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "${org.sif-Child-Kering-B1-IT}"
      ],
      "line": 46
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "StrAssociate",
        "strassociate2${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "${org.sif-Child-Kering-B1-IT}"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as admin@${org.sif-Child-Kering-B1-IT} and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the Location with following details",
  "rows": [
    {
      "cells": [
        "OrganizationId",
        "LocationId",
        "ParentOrgId",
        "DisplayId",
        "LocationType.LocationTypeId",
        "LocationStatus.LocationStatusID",
        "LocationTimeZone",
        "LocationName",
        "Latitude",
        "Longitude",
        "Address.Address1",
        "Address.Address2",
        "Address.City",
        "Address.Country",
        "Address.PostalCode",
        "Address.State",
        "Address.Phone",
        "Address.Email",
        "Address.FirstName",
        "Address.LastName",
        "LocationFulfillmentAttr.PickupAtStore",
        "LocationFulfillmentAttr.ShipFromStore",
        "LocationFulfillmentAttr.ShipToStore",
        "LocationSubType.LocationSubTypeId"
      ],
      "line": 52
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "STR1-${RandomNumber}",
        "${org.sif-Child-Kering-B1-IT}",
        "STR1-${RandomNumber}",
        "Store",
        "Operational",
        "US/Eastern",
        "STR-NorthPark",
        "33.8677",
        "-84.4645",
        "2300 Windy Ridge Pkwy",
        "10th Floor",
        "Atlanta",
        "US",
        "30339",
        "GA",
        "(770) 955-7070",
        "dj@manh.com",
        "David",
        "James",
        "true",
        "true",
        "true",
        "HighVolumeStore"
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the LocationContact in the Location with following information",
  "rows": [
    {
      "cells": [
        "Location.Criteria",
        "LocationContactId",
        "LocationContactType.LocationContactTypeId",
        "Email",
        "FirstName",
        "LastName",
        "PhoneNumber"
      ],
      "line": 56
    },
    {
      "cells": [
        "LocationId \u003d\u003d \u0027STR1-${RandomNumber}\u0027",
        "STR1-${RandomNumber}",
        "Billing",
        "dj@manh.com",
        "David",
        "James",
        "(770) 955-7070"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the Location is saved",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the Location should be",
  "rows": [
    {
      "cells": [
        "Location.Criteria",
        "DisplayId",
        "LocationName"
      ],
      "line": 62
    },
    {
      "cells": [
        "LocationId \u003d\u003d \u0027STR1-${RandomNumber}\u0027",
        "STR1-${RandomNumber}",
        "STR-NorthPark"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the User with following details",
  "rows": [
    {
      "cells": [
        "PrimaryOrgId",
        "UserId",
        "UserTimeZone",
        "IdentityType.IdentityTypeId",
        "IdentityType.IdentityTypeName",
        "UserType.UserTypeId",
        "DateOfBirth",
        "Gender",
        "Address.Address1",
        "Address.Address2",
        "Address.City",
        "Address.State",
        "Address.PostalCode",
        "Address.Country",
        "Address.Phone",
        "Address.Email",
        "Email2"
      ],
      "line": 66
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
        "US/Eastern",
        "Database",
        "Database",
        "Human",
        "1980-06-10",
        "Male",
        "2300 Windy Ridge Pkwy",
        "10th Floor",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "(770) 955-7070",
        "orgadmin@manh.com",
        "mg@gmail.com"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the UserLocation in the User with following information",
  "rows": [
    {
      "cells": [
        "User.Criteria",
        "LocationId"
      ],
      "line": 70
    },
    {
      "cells": [
        "UserId \u003d\u003d \u0027strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com\u0027",
        "STR1-${RandomNumber}"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the User is saved",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the Inventory.Location with following data is persisted",
  "rows": [
    {
      "cells": [
        "LocationId",
        "DisplayId",
        "LocationName",
        "LocationStatusId",
        "LocationTypeId",
        "LaborCost",
        "LocationProcessingTime"
      ],
      "line": 76
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "STR1-${RandomNumber}",
        "STR1-${RandomNumber}",
        "1",
        "Stores",
        "3.0",
        "1.0"
      ],
      "line": 77
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the Inventory.LocationAttributes with following data is persisted",
  "rows": [
    {
      "cells": [
        "LocationId",
        "MaintainPOSupply",
        "MaintainASNSupply",
        "MaintainOHSupply",
        "MaintainOHByDisposition"
      ],
      "line": 80
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "false",
        "false",
        "true",
        "false"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the ItemCodeType with following data is persisted",
  "rows": [
    {
      "cells": [
        "CodeTypeId",
        "TypeName",
        "Description"
      ],
      "line": 84
    },
    {
      "cells": [
        "Secondary_UPC",
        "Secondary UPC",
        "Represents Secondary UPC"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the Item with following details",
  "rows": [
    {
      "cells": [
        "ItemId",
        "ShortDescription",
        "Description",
        "Style",
        "Color",
        "Size",
        "IsScanOnly",
        "LargeImageURI",
        "SmallImageURI",
        "StoreDepartment",
        "WebURL",
        "BaseUOM",
        "Weight",
        "WeightUOM",
        "Brand",
        "ProductClass"
      ],
      "line": 88
    },
    {
      "cells": [
        "Item1-${RandomNumber}",
        "Kid\u0027s T-Shirt Short Desc",
        "Kid\u0027s T-Shirt Desc",
        "Casual",
        "Blck",
        "M",
        "true",
        "/largeitem1.jpeg",
        "/smallitem1.jpeg",
        "Kid\u0027s Apparel",
        "https://images.com/item1.png",
        "Units",
        "1.5",
        "LB",
        "",
        ""
      ],
      "line": 89
    },
    {
      "cells": [
        "Item2-${RandomNumber}",
        "Women\u0027s T-Shirt Short Desc",
        "Women\u0027s T-Shirt Desc",
        "Formal",
        "Grn",
        "XS",
        "false",
        "/largeitem2.jpeg",
        "/smallitem2.jpeg",
        "",
        "https://images.com/item2.png",
        "Units",
        "2",
        "LB",
        "",
        ""
      ],
      "line": 90
    },
    {
      "cells": [
        "Item3-${RandomNumber}",
        "Men\u0027s T-Shirt Short Desc",
        "Men\u0027s T-Shirt Desc",
        "Formal",
        "Grn",
        "XS",
        "false",
        "/largeitem3.jpeg",
        "/smallitem3.jpeg",
        "",
        "https://images.com/item3.png",
        "Units",
        "2",
        "LB",
        "",
        ""
      ],
      "line": 91
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the Media in the Item with following information",
  "rows": [
    {
      "cells": [
        "Item.Criteria",
        "MediaId",
        "MimeTypeId",
        "URI",
        "MediaSizeId",
        "Sequence"
      ],
      "line": 94
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "Media Id1",
        ".jpeg",
        "/smallimage/kidstshirt.jpeg",
        "small image",
        "1"
      ],
      "line": 95
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "Media Id2",
        ".png",
        "/largeimage/kidstshirt.png",
        "large image",
        "2"
      ],
      "line": 96
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the ItemCode in the Item with following information",
  "rows": [
    {
      "cells": [
        "Item.Criteria",
        "CodeTypeId.CodeTypeId",
        "Value"
      ],
      "line": 99
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "Primary_UPC",
        "12341001"
      ],
      "line": 100
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "GTIN",
        "56781001"
      ],
      "line": 101
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item2-${RandomNumber}\u0027",
        "Primary_UPC",
        "12341002"
      ],
      "line": 102
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item2-${RandomNumber}\u0027",
        "Secondary_UPC",
        "56781002"
      ],
      "line": 103
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item3-${RandomNumber}\u0027",
        "GTIN",
        "12341003"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the ManufacturingAttribute in the Item with following information",
  "rows": [
    {
      "cells": [
        "Item.Criteria",
        "CountryofOrigin",
        "Upc",
        "VendorLocationId",
        "ScanQuantity"
      ],
      "line": 107
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "CN",
        "13571001",
        "01",
        "2"
      ],
      "line": 108
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "US",
        "24681001",
        "02",
        "1"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the Item is saved",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the ItemPrice with following data is persisted",
  "rows": [
    {
      "cells": [
        "ItemId",
        "PriceId",
        "BasePrice",
        "SellingPrice",
        "BehaviorAfterEndDate",
        "Rank",
        "CurrencyCode",
        "ListId",
        "EffectiveStartDate",
        "EffectiveEndDate"
      ],
      "line": 114
    },
    {
      "cells": [
        "Item1-${RandomNumber}",
        "Item1-${RandomNumber}",
        "22.5",
        "15.13",
        "Ignore",
        "1",
        "USD",
        "Default",
        "2016-01-01T00:00",
        "2020-12-31T23:59"
      ],
      "line": 115
    },
    {
      "cells": [
        "Item2-${RandomNumber}",
        "Item2-${RandomNumber}",
        "22.5",
        "15.13",
        "Ignore",
        "1",
        "USD",
        "Default",
        "2016-01-01T00:00",
        "2020-12-31T23:59"
      ],
      "line": 116
    },
    {
      "cells": [
        "Item3-${RandomNumber}",
        "Item3-${RandomNumber}",
        "22.5",
        "15.13",
        "Ignore",
        "1",
        "USD",
        "Default",
        "2016-01-01T00:00",
        "2020-12-31T23:59"
      ],
      "line": 117
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the Customer with following details",
  "rows": [
    {
      "cells": [
        "CustomerId",
        "FirstName",
        "LastName",
        "Phone",
        "Email",
        "CustomerType",
        "Gender",
        "IsActive",
        "TaxExemptId",
        "Birthday",
        "AnniversaryDate",
        "CustomerPreferences.PreferredShipViaId",
        "CustomerPreferences.PreferredCallTime",
        "CustomerPreferences.PreferredStoreLocationId",
        "CustomerPreferences.PreferredContactMethodId"
      ],
      "line": 120
    },
    {
      "cells": [
        "Cus${RandomNumber}",
        "Customer",
        "${RandomNumber}",
        "(123) 123-1234",
        "${RandomNumber}@manh.com",
        "Gold",
        "Female",
        "true",
        "T-9876502",
        "1988-02-01",
        "2011-12-04",
        "STD",
        "Morning",
        "New York Store",
        "Email/Text"
      ],
      "line": 121
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the CustomerPaymentMethod in the Customer with following information",
  "rows": [
    {
      "cells": [
        "Customer.Criteria",
        "PaymentMethodId",
        "CardExpiryYear",
        "AccountNumber",
        "CardType",
        "NameOnCard",
        "PaymentMethodType",
        "CardExpiryMonth",
        "AccountDisplayNumber",
        "RoutingNumber",
        "RoutingDisplayNumber",
        "DriversLicenseNumber",
        "DriversLicenseState",
        "DriversLicenseCountry",
        "BusinessName",
        "BusinessTaxId",
        "SwipeData",
        "BillingAddressId"
      ],
      "line": 124
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "1",
        "2021",
        "4111111111111111",
        "Visa",
        "KIRAN",
        "Credit Card",
        "11",
        "ccount ending with 1111",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "BAddr02"
      ],
      "line": 125
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "the CustomerAddress in the Customer with following information",
  "rows": [
    {
      "cells": [
        "Customer.Criteria",
        "AddressId",
        "AddressTypeId",
        "IsAddressVerified",
        "IsPreferred",
        "AddressName",
        "Address.FirstName",
        "Address.LastName",
        "Address.Address1",
        "Address.Address2",
        "Address.Address3",
        "Address.City",
        "Address.State",
        "Address.PostalCode",
        "Address.Country",
        "Address.Phone",
        "Address.Email",
        "Address.County"
      ],
      "line": 128
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "Addr02",
        "Both",
        "true",
        "false",
        "Home",
        "Britney",
        "Headey",
        "2300 Windy Ridge Pkwy",
        "",
        "",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "(678) 597-7701",
        "${RandomNumber}@manh.com",
        ""
      ],
      "line": 129
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "BAddr02",
        "Billing",
        "true",
        "true",
        "Work",
        "Britney",
        "Ch",
        "2300 Windy Ridge",
        "",
        "",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "(678) 597-7701",
        "${RandomNumber}@manh.com",
        ""
      ],
      "line": 130
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "Addr105",
        "Billing",
        "true",
        "false",
        "Work",
        "Britney",
        "Ch",
        "200 E Main St",
        "Beaverton",
        "",
        "Pheonix",
        "AZ",
        "85123",
        "US",
        "(678) 597-7701",
        "${RandomNumber}@manh.com",
        ""
      ],
      "line": 131
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "Addr02",
        "Shipping",
        "true",
        "true",
        "Work",
        "Britney",
        "Ch",
        "1400 Holcomb Ridge Rd",
        "",
        "",
        "Roswell",
        "GA",
        "30076",
        "US",
        "(678) 597-7701",
        "${RandomNumber}@manh.com",
        ""
      ],
      "line": 132
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the CustomerAttribute in the Customer with following information",
  "rows": [
    {
      "cells": [
        "Customer.Criteria",
        "Name",
        "Value"
      ],
      "line": 135
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "FavoriteColor",
        "Sky Blue"
      ],
      "line": 136
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "ShoeSize",
        "8"
      ],
      "line": 137
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the CustomerAlternateId in the Customer with following information",
  "rows": [
    {
      "cells": [
        "Customer.Criteria",
        "InactiveCustomerId"
      ],
      "line": 140
    },
    {
      "cells": [
        "CustomerId \u003d\u003d \u0027Cus${RandomNumber}\u0027",
        "CUS_ALT_02"
      ],
      "line": 141
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the Customer is saved",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the AllocationConfig with following details",
  "rows": [
    {
      "cells": [
        "ConfigName",
        "Description",
        "Rank",
        "EffectiveDate",
        "IsDefault",
        "DemandType"
      ],
      "line": 146
    },
    {
      "cells": [
        "AllocConfig${RandomNumber}",
        "AllocConfig${RandomNumber}",
        "${FourDigitNumber}",
        "2016-05-30T00:00:00",
        "false",
        "Allocation"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the AllocationSource in the AllocationConfig with following information",
  "rows": [
    {
      "cells": [
        "AllocationConfig.Criteria",
        "SourceId",
        "Rank",
        "SourceCategory"
      ],
      "line": 150
    },
    {
      "cells": [
        "ConfigName \u003d\u003d \u0027AllocConfig${RandomNumber}\u0027",
        "Source1",
        "1",
        "order"
      ],
      "line": 151
    },
    {
      "cells": [
        "ConfigName \u003d\u003d \u0027AllocConfig${RandomNumber}\u0027",
        "Source2",
        "1",
        "orderLine"
      ],
      "line": 152
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the AllocationConfig is saved",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the AllocationRuleCondition with following data is persisted",
  "rows": [
    {
      "cells": [
        "RuleType",
        "RuleConditionId",
        "RuleCondition"
      ],
      "line": 157
    },
    {
      "cells": [
        "Order",
        "Rule${RandomNumber}",
        "order.customerId\u003d\"Cus${RandomNumber}\""
      ],
      "line": 158
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the AllocationSourceToCondition with following data is persisted",
  "rows": [
    {
      "cells": [
        "AllocationPromisingConfigId",
        "AllocationSourceId",
        "AllocationRuleConditionId"
      ],
      "line": 161
    },
    {
      "cells": [
        "AllocConfig${RandomNumber}",
        "Source1",
        "Rule${RandomNumber}"
      ],
      "line": 162
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the ReleaseConfig with following details",
  "rows": [
    {
      "cells": [
        "Description",
        "RuleCondition",
        "Rank",
        "ConfigName",
        "DemandType.DemandTypeId",
        "ReleaseType.ReleaseTypeId"
      ],
      "line": 165
    },
    {
      "cells": [
        "Release Configuration ${FourDigitNumber}",
        "",
        "${FourDigitNumber}",
        "ReleaseConfigForOmniOrder ${RandomNumber}",
        "Allocation",
        "Allocation"
      ],
      "line": 166
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "the ReleaseRuleCondition in the ReleaseConfig with following information",
  "rows": [
    {
      "cells": [
        "ReleaseConfig.Criteria",
        "RuleExpression",
        "RuleConditionId",
        "RuleName",
        "RuleCondition"
      ],
      "line": 169
    },
    {
      "cells": [
        "ConfigName\u003d\u003d\u0027ReleaseConfigForOmniOrder ${RandomNumber}\u0027",
        "",
        "RRC_${FourDigitNumber}",
        "SSF1_${FourDigitNumber}",
        "(allocation.parentOrderLine.parentOrder.customerId \u003d \"Cus${RandomNumber}\") and allocation.parentOrderLine.parentOrder.isConfirmed \u003d true"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the ReleaseConfig is saved",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the NoteType with following data is persisted",
  "rows": [
    {
      "cells": [
        "NoteTypeId",
        "NoteCategoryId",
        "Description"
      ],
      "line": 175
    },
    {
      "cells": [
        "PICK",
        "Instruction",
        "Pick Instruction"
      ],
      "line": 176
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 178,
      "value": "# Creating supply for item and location event"
    }
  ],
  "line": 179,
  "name": "inventory is persisted with following details",
  "rows": [
    {
      "cells": [
        "TransactionTypeId",
        "SupplyDefinition.ItemId",
        "SupplyDefinition.LocationId",
        "SupplyDefinition.SupplyType.SupplyTypeId",
        "SupplyDefinition.SupplyData.Quantity",
        "SupplyDefinition.SupplyData.UOM",
        "SupplyDefinition.SupplyData.QuantityAdjustmentType"
      ],
      "line": 180
    },
    {
      "cells": [
        "Adjustment",
        "Item1-${RandomNumber}",
        "STR1-${RandomNumber}",
        "On Hand Available",
        "100",
        "unit",
        "A"
      ],
      "line": 181
    },
    {
      "cells": [
        "Adjustment",
        "Item2-${RandomNumber}",
        "STR1-${RandomNumber}",
        "On Hand Available",
        "50",
        "unit",
        "A"
      ],
      "line": 182
    },
    {
      "cells": [
        "Adjustment",
        "Item3-${RandomNumber}",
        "STR1-${RandomNumber}",
        "On Hand Available",
        "25",
        "unit",
        "A"
      ],
      "line": 183
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "fetch inventory for item",
  "rows": [
    {
      "cells": [
        "ItemId",
        "LocationId"
      ],
      "line": 186
    },
    {
      "cells": [
        "Item1-${RandomNumber}",
        "STR1-${RandomNumber}"
      ],
      "line": 187
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "validate Supply level entity from previous api response",
  "rows": [
    {
      "cells": [
        "Supply.Criteria",
        "Quantity",
        "SupplyTypeId.SupplyTypeId"
      ],
      "line": 190
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "100",
        "On Hand Available"
      ],
      "line": 191
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "fetch inventory for item",
  "rows": [
    {
      "cells": [
        "ItemId",
        "LocationId"
      ],
      "line": 194
    },
    {
      "cells": [
        "Item2-${RandomNumber}",
        "STR1-${RandomNumber}"
      ],
      "line": 195
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 197,
  "name": "validate Supply level entity from previous api response",
  "rows": [
    {
      "cells": [
        "Supply.Criteria",
        "Quantity",
        "SupplyTypeId.SupplyTypeId"
      ],
      "line": 198
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item2-${RandomNumber}\u0027",
        "50",
        "On Hand Available"
      ],
      "line": 199
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "fetch inventory for item",
  "rows": [
    {
      "cells": [
        "ItemId",
        "LocationId"
      ],
      "line": 202
    },
    {
      "cells": [
        "Item3-${RandomNumber}",
        "STR1-${RandomNumber}"
      ],
      "line": 203
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 205,
  "name": "validate Supply level entity from previous api response",
  "rows": [
    {
      "cells": [
        "Supply.Criteria",
        "Quantity",
        "SupplyTypeId.SupplyTypeId"
      ],
      "line": 206
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item3-${RandomNumber}\u0027",
        "25",
        "On Hand Available"
      ],
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "create fulfillment composite rules",
  "rows": [
    {
      "cells": [
        "rule.DisplaySequence",
        "rule.Salience",
        "rule.RuleVersion",
        "rule.RuleStatus",
        "rule.RuleId",
        "rule.RuleDescription",
        "rule.RuleGroup.RuleGroupId",
        "rule.RuleGroup.RuleGroupDescription",
        "rule.ActivationDate",
        "rule.ExpirationDate",
        "rule.RuleGroupId",
        "rule.RuleConditionId.RuleConditionId",
        "rule.RuleActionId.RuleActionId",
        "rule.Component",
        "action.RuleActionId",
        "action.ActionDescription",
        "action.ActionValue",
        "condition.RuleConditionId",
        "condition.ConditionValue"
      ],
      "line": 210
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "active",
        "Tag${SixDigitNumber}",
        "Gift Orders",
        "PickUpAtStore",
        "Pick Up At Store",
        "2017-08-21T00:00:00.000",
        "2018-12-30T00:00:00.000",
        "PickUpAtStore",
        "Tag${SixDigitNumber}",
        "Tag${SixDigitNumber}",
        "fulfillment",
        "Tag${SixDigitNumber}",
        "Gift Orders",
        "Tag${SixDigitNumber}",
        "Tag${SixDigitNumber}",
        "fulfillmentLine.isGift \u003d true"
      ],
      "line": 211
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "the ItemAttributeDefinition with following data is persisted",
  "rows": [
    {
      "cells": [
        "ItemAttributeName"
      ],
      "line": 214
    },
    {
      "cells": [
        "Style"
      ],
      "line": 215
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the AreaDefinition with following details",
  "rows": [
    {
      "cells": [
        "AreaId",
        "AreaName1",
        "AreaName2",
        "AreaSequence"
      ],
      "line": 218
    },
    {
      "cells": [
        "Floor1-Section1",
        "Floor1",
        "Section1",
        "1"
      ],
      "line": 219
    },
    {
      "cells": [
        "Floor1-Section2",
        "Floor1",
        "Section2",
        "2"
      ],
      "line": 220
    },
    {
      "cells": [
        "Floor2-Section1",
        "Floor2",
        "Section1",
        "3"
      ],
      "line": 221
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "the AreaItemMap in the AreaDefinition with following information",
  "rows": [
    {
      "cells": [
        "AreaDefinition.Criteria",
        "ItemAttributeValue",
        "ItemSequence",
        "IsPrimary"
      ],
      "line": 224
    },
    {
      "cells": [
        "AreaId \u003d\u003d \u0027Floor1-Section1\u0027",
        "Casual",
        "1",
        "true"
      ],
      "line": 225
    },
    {
      "cells": [
        "AreaId \u003d\u003d \u0027Floor1-Section2\u0027",
        "Casual",
        "1",
        "false"
      ],
      "line": 226
    },
    {
      "cells": [
        "AreaId \u003d\u003d \u0027Floor2-Section1\u0027",
        "Formal",
        "1",
        "true"
      ],
      "line": 227
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "the AreaDefinition is saved",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 231,
      "value": "# Enable PPO Configuration"
    }
  ],
  "line": 232,
  "name": "execute an update operation on FulfillmentConfiguration",
  "rows": [
    {
      "cells": [
        "UpdateUrl",
        "AppendToBaseUrl",
        "IsHttpPost",
        "Category",
        "Description",
        "ConfigurationId",
        "Value",
        "DataType"
      ],
      "line": 233
    },
    {
      "cells": [
        "configurationId/USE_PATH_OPTIMIZATION_WHILE_GENERATING_PICKLIST",
        "true",
        "false",
        "Pick",
        "Use path optimization while generating picklist",
        "USE_PATH_OPTIMIZATION_WHILE_GENERATING_PICKLIST",
        "True",
        "Boolean"
      ],
      "line": 234
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 236,
      "value": "# Disable Spilt Configuration"
    }
  ],
  "line": 237,
  "name": "execute an update operation on FulfillmentConfiguration",
  "rows": [
    {
      "cells": [
        "UpdateUrl",
        "AppendToBaseUrl",
        "IsHttpPost",
        "ConfigurationId",
        "Value"
      ],
      "line": 238
    },
    {
      "cells": [
        "configurationId/SPLIT_PICKUP_FULFILLMENTS_TO_BE_PICKED_BY_MULTIPLE_ASSOCIATES",
        "true",
        "false",
        "SPLIT_PICKUP_FULFILLMENTS_TO_BE_PICKED_BY_MULTIPLE_ASSOCIATES",
        "False"
      ],
      "line": 239
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 241,
      "value": "# Updating Risk Time for pickup order"
    }
  ],
  "line": 242,
  "name": "execute an update operation on FulfillmentConfiguration",
  "rows": [
    {
      "cells": [
        "UpdateUrl",
        "AppendToBaseUrl",
        "IsHttpPost",
        "Category",
        "Description",
        "ConfigurationId",
        "Value",
        "DataType"
      ],
      "line": 243
    },
    {
      "cells": [
        "configurationId/MINUTES_BEFORE_DELIVERY_DUE_DATE_AS_RISK_FOR_PICKUP_ORDER",
        "true",
        "false",
        "PickUp",
        "Minutes before delivery date, the pickup orders are assessed as risk",
        "MINUTES_BEFORE_DELIVERY_DUE_DATE_AS_RISK_FOR_PICKUP_ORDER",
        "75",
        "Number"
      ],
      "line": 244
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 246,
      "value": "# Updating pickup expiry window"
    }
  ],
  "line": 247,
  "name": "execute an update operation on FulfillmentConfiguration",
  "rows": [
    {
      "cells": [
        "UpdateUrl",
        "AppendToBaseUrl",
        "IsHttpPost",
        "Category",
        "Description",
        "ConfigurationId",
        "Value",
        "DataType"
      ],
      "line": 248
    },
    {
      "cells": [
        "configurationId/MAXIMUM_NUMBER_OF_DAYS_ALLOWED_FOR_CUSTOMER_TO_PICKUP_THE_ORDER",
        "true",
        "false",
        "PickUp",
        "Maximum number of days allowed for customer to pickup an order",
        "MAXIMUM_NUMBER_OF_DAYS_ALLOWED_FOR_CUSTOMER_TO_PICKUP_THE_ORDER",
        "10",
        "Number"
      ],
      "line": 249
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "the Order with following details",
  "rows": [
    {
      "cells": [
        "OrderId",
        "SellingLocation",
        "IsOnHold",
        "IsConfirmed",
        "IsCancelled",
        "CurrencyCode",
        "ParentOrderId",
        "IsTaxExempt",
        "CustomerAlternateOrderId",
        "IsPostVoided",
        "HasNotes",
        "HasAlerts",
        "IsReadyForTender",
        "CustomerId",
        "UpdatesConfirmed",
        "ProfileId",
        "DeliveryDueDate"
      ],
      "line": 252
    },
    {
      "cells": [
        "OrdM${RandomNumber}",
        "ATG",
        "false",
        "true",
        "false",
        "USD",
        "0001",
        "false",
        "Atl_ECOMORD1080",
        "false",
        "false",
        "false",
        "false",
        "Cus${RandomNumber}",
        "false",
        "1001",
        "${CurrentTime}"
      ],
      "line": 253
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "the OrderTaxDetail in the Order with following information",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "TaxDetailId",
        "TaxTypeId",
        "TaxRequestTypeId",
        "TaxableAmount",
        "TaxAmount",
        "TaxRate",
        "Jurisdiction",
        "JurisdictionTypeId",
        "TaxDate",
        "TaxCode"
      ],
      "line": 256
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "theader_012a_04",
        "SALES",
        "QUOTATION",
        "13",
        "0.52",
        "0.04",
        "GEORGIA",
        "STATE",
        "2016-08-22T10:50:49.473",
        ""
      ],
      "line": 257
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "theader_012a_004",
        "SALES",
        "QUOTATION",
        "13",
        "0.26",
        "0.02",
        "COBB",
        "COUNTY",
        "2016-08-22T10:50:49.473",
        ""
      ],
      "line": 258
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "the PaymentMethod in the Order with following information",
  "rows": [
    {
      "cells": [
        "Payment.Criteria",
        "PaymentMethodId",
        "CurrencyCode",
        "AccountNumber",
        "NameOnCard",
        "CardExpiryYear",
        "CardExpiryMonth",
        "Amount",
        "BillingAddress.Address.FirstName",
        "BillingAddress.Address.LastName",
        "BillingAddress.Address.Address1",
        "BillingAddress.Address.City",
        "BillingAddress.Address.State",
        "BillingAddress.Address.PostalCode",
        "BillingAddress.Address.Country",
        "BillingAddress.Address.Phone",
        "BillingAddress.Address.Email",
        "PaymentType.PaymentTypeId"
      ],
      "line": 261
    },
    {
      "cells": [
        "PaymentGroupId \u003d\u003d null",
        "PM19",
        "USD",
        "4111111111111111",
        "Varys",
        "2035",
        "02",
        "13.3",
        "Oberyn",
        "Martell",
        "2300 Windy Ridge",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "423-306-1973",
        "OMartell@yahoo.com",
        "Credit Card"
      ],
      "line": 262
    },
    {
      "cells": [
        "PaymentGroupId \u003d\u003d null",
        "PM20",
        "USD",
        "4111111111111111",
        "Varys",
        "2035",
        "02",
        "31.1",
        "Oberyn",
        "Martell",
        "2300 Windy Ridge",
        "Atlanta",
        "GA",
        "30339",
        "US",
        "423-306-1973",
        "OMartell@yahoo.com",
        "Debit"
      ],
      "line": 263
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "the PaymentTransaction in the Order with following information",
  "rows": [
    {
      "cells": [
        "Payment.Criteria",
        "PaymentMethod.Criteria",
        "PaymentTransactionId",
        "PaymentResponseStatus.PaymentResponseStatusId",
        "TransactionType",
        "TransactionExpiryDate",
        "RequestedAmount",
        "RequestId",
        "RequestToken",
        "ProcessedAmount",
        "Status.PaymentTransactionStatusId"
      ],
      "line": 266
    },
    {
      "cells": [
        "PaymentGroupId \u003d\u003d null",
        "PaymentMethodId \u003d\u003d \u0027PM19\u0027",
        "PT19",
        "Success",
        "Authorization",
        "2017-11-09T16:15:43.254",
        "13.3",
        "21124123",
        "dgfr356ghgj768767",
        "13.3",
        "Closed"
      ],
      "line": 267
    },
    {
      "cells": [
        "PaymentGroupId \u003d\u003d null",
        "PaymentMethodId \u003d\u003d \u0027PM20\u0027",
        "PT20",
        "Success",
        "Authorization",
        "2017-11-09T16:15:43.254",
        "31.1",
        "21124123",
        "dgfr356ghgj768767",
        "31.1",
        "Closed"
      ],
      "line": 268
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "the OrderLine in the Order with following information",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLineId",
        "IsCancelled",
        "IsGift",
        "ItemId",
        "ItemDescription",
        "ItemShortDescription",
        "UnitPrice",
        "Quantity",
        "UOM",
        "IsTaxExempt",
        "OrderLinePromisingInfo.ShipFromLocationId",
        "DeliveryMethod.DeliveryMethodId",
        "ShippingMethodId",
        "ShipToLocationId",
        "OrderLinePromisingInfo.IsForceAllocate"
      ],
      "line": 271
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "1",
        "false",
        "true",
        "Item1-${RandomNumber}",
        "Kid\u0027s T-Shirt Desc",
        "Kid\u0027s T-Shirt Short Desc",
        "10",
        "2",
        "Units",
        "false",
        "STR1-${RandomNumber}",
        "PickUpAtStore",
        "",
        "STR1-${RandomNumber}",
        "false"
      ],
      "line": 272
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "2",
        "false",
        "false",
        "Item2-${RandomNumber}",
        "Women\u0027s T-Shirt Desc",
        "Women\u0027s T-Shirt Short Desc",
        "10",
        "3",
        "Units",
        "false",
        "STR1-${RandomNumber}",
        "PickUpAtStore",
        "",
        "STR1-${RandomNumber}",
        "false"
      ],
      "line": 273
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "3",
        "false",
        "true",
        "Item3-${RandomNumber}",
        "Men\u0027s T-Shirt Desc",
        "Men\u0027s T-Shirt Short Desc",
        "10",
        "2",
        "Units",
        "false",
        "STR1-${RandomNumber}",
        "PickUpAtStore",
        "",
        "STR1-${RandomNumber}",
        "false"
      ],
      "line": 274
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the OrderLineTaxDetail in the Order with following information",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "TaxDetailId",
        "TaxTypeId",
        "TaxRequestTypeId",
        "TaxableAmount",
        "TaxAmount",
        "TaxRate",
        "Jurisdiction",
        "JurisdictionTypeId",
        "TaxDate"
      ],
      "line": 277
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00271\u0027",
        "taxline_00012",
        "SALES",
        "QUOTATION",
        "127.00",
        "5.08",
        "0.04",
        "GEORGIA",
        "STATE",
        "2016-08-22T10:50:49.473"
      ],
      "line": 278
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00271\u0027",
        "taxline_00013",
        "SALES",
        "QUOTATION",
        "127.0",
        "2.54",
        "0.02",
        "COBB",
        "COUNTY",
        "2016-08-22T10:50:49.473"
      ],
      "line": 279
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00272\u0027",
        "taxline_00012",
        "SALES",
        "QUOTATION",
        "127.00",
        "5.08",
        "0.04",
        "GEORGIA",
        "STATE",
        "2016-08-22T10:50:49.473"
      ],
      "line": 280
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00272\u0027",
        "taxline_00013",
        "SALES",
        "QUOTATION",
        "127.0",
        "2.54",
        "0.02",
        "COBB",
        "COUNTY",
        "2016-08-22T10:50:49.473"
      ],
      "line": 281
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00273\u0027",
        "taxline_00012",
        "SALES",
        "QUOTATION",
        "127.00",
        "5.08",
        "0.04",
        "GEORGIA",
        "STATE",
        "2016-08-22T10:50:49.473"
      ],
      "line": 282
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00273\u0027",
        "taxline_00013",
        "SALES",
        "QUOTATION",
        "127.0",
        "2.54",
        "0.02",
        "COBB",
        "COUNTY",
        "2016-08-22T10:50:49.473"
      ],
      "line": 283
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "the OrderLineNote in the Order with following information",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "NoteId",
        "NoteText",
        "NoteType.NoteTypeId",
        "IsVisible",
        "NoteCategory.NoteCategoryId"
      ],
      "line": 286
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00271\u0027",
        "1",
        "Instruction - Line",
        "PICK",
        "true",
        "Instruction"
      ],
      "line": 287
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId \u003d\u003d \u00273\u0027",
        "2",
        "Instruction - Line",
        "PICK",
        "true",
        "Instruction"
      ],
      "line": 288
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "the Order is saved",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 292,
      "value": "#Wait time has been given for 10mins as a temporary solution to fix order release issue."
    },
    {
      "line": 293,
      "value": "#This needs to be reverted."
    }
  ],
  "line": 294,
  "name": "wait time",
  "rows": [
    {
      "cells": [
        "WaitTime"
      ],
      "line": 295
    },
    {
      "cells": [
        "600000"
      ],
      "line": 296
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 298,
  "name": "the Order should be",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 299
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "3000",
        "3000"
      ],
      "line": 300
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "there should be 3 of OrderLine in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 303
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "3000",
        "3000"
      ],
      "line": 304
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "3000",
        "3000"
      ],
      "line": 305
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "3000",
        "3000"
      ],
      "line": 306
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "there should be 3 of QuantityDetail in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "QuantityDetail.Criteria",
        "Quantity"
      ],
      "line": 309
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00273000\u0027",
        "2"
      ],
      "line": 310
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00273000\u0027",
        "3"
      ],
      "line": 311
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "StatusId \u003d\u003d \u00273000\u0027",
        "2"
      ],
      "line": 312
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "get order api is called",
  "rows": [
    {
      "cells": [
        "OrderId"
      ],
      "line": 315
    },
    {
      "cells": [
        "OrdM${RandomNumber}"
      ],
      "line": 316
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 318,
  "name": "extract the following expression from last api response list",
  "rows": [
    {
      "cells": [
        "Release.listValue",
        "VariableName",
        "VariableExpression"
      ],
      "line": 319
    },
    {
      "cells": [
        "0",
        "fulfillmentId",
        "ReleaseId"
      ],
      "line": 320
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "extract the following expression from last api response list",
  "rows": [
    {
      "cells": [
        "Release.listValue",
        "ReleaseLine.listValue",
        "VariableName",
        "VariableExpression"
      ],
      "line": 323
    },
    {
      "cells": [
        "0",
        "0",
        "tempItem1",
        "ItemId"
      ],
      "line": 324
    },
    {
      "cells": [
        "0",
        "0",
        "tempItem1Qty",
        "Quantity"
      ],
      "line": 325
    },
    {
      "cells": [
        "0",
        "1",
        "tempItem2",
        "ItemId"
      ],
      "line": 326
    },
    {
      "cells": [
        "0",
        "1",
        "tempItem2Qty",
        "Quantity"
      ],
      "line": 327
    },
    {
      "cells": [
        "0",
        "2",
        "tempItem3",
        "ItemId"
      ],
      "line": 328
    },
    {
      "cells": [
        "0",
        "2",
        "tempItem3Qty",
        "Quantity"
      ],
      "line": 329
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "get fulfillment api is called",
  "rows": [
    {
      "cells": [
        "FulfillmentId"
      ],
      "line": 332
    },
    {
      "cells": [
        "${fulfillmentId}"
      ],
      "line": 333
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 335,
  "name": "validate Fulfillment level entity from previous api response",
  "rows": [
    {
      "cells": [
        "MinStatusId",
        "MaxStatusId"
      ],
      "line": 336
    },
    {
      "cells": [
        "1000.000",
        "1000.000"
      ],
      "line": 337
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "validate FulfillmentLine level entity from previous api response",
  "rows": [
    {
      "cells": [
        "FulfillmentLine.Criteria",
        "FulfillmentLineStatusId"
      ],
      "line": 340
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00271\u0027",
        "1000.000"
      ],
      "line": 341
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00272\u0027",
        "1000.000"
      ],
      "line": 342
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00273\u0027",
        "1000.000"
      ],
      "line": 343
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "validate FulfillmentLineInstruction level entity from previous api response",
  "rows": [
    {
      "cells": [
        "FulfillmentLine.Criteria",
        "FulfillmentLineInstruction.Criteria",
        "InstructionTypeId.FulfillmentInstructionTypeId"
      ],
      "line": 346
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00271\u0027",
        "InstructionText \u003d\u003d \u0027Instruction - Line\u0027",
        "1000.000"
      ],
      "line": 347
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00273\u0027",
        "InstructionText \u003d\u003d \u0027Instruction - Line\u0027",
        "1000.000"
      ],
      "line": 348
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "set the session variables",
  "rows": [
    {
      "cells": [
        "VariableName",
        "VariableValue"
      ],
      "line": 351
    },
    {
      "cells": [
        "expLine1PickedQty",
        "2"
      ],
      "line": 352
    },
    {
      "cells": [
        "expLine1CancelledQty",
        "0"
      ],
      "line": 353
    },
    {
      "cells": [
        "expLine1StatusAfterPicking",
        "3000.000"
      ],
      "line": 354
    },
    {
      "cells": [
        "expLine2PickedQty",
        "2"
      ],
      "line": 355
    },
    {
      "cells": [
        "expLine2CancelledQty",
        "1"
      ],
      "line": 356
    },
    {
      "cells": [
        "expLine2StatusAfterPicking",
        "3000.000"
      ],
      "line": 357
    },
    {
      "cells": [
        "expLine3PickedQty",
        "0"
      ],
      "line": 358
    },
    {
      "cells": [
        "expLine3CancelledQty",
        "2"
      ],
      "line": 359
    },
    {
      "cells": [
        "expLine3StatusAfterPicking",
        "9000.000"
      ],
      "line": 360
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "menu count api is called",
  "rows": [
    {
      "cells": [
        "OrganizationId",
        "LocationId"
      ],
      "line": 365
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "STR1-${RandomNumber}"
      ],
      "line": 366
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "menu count should be",
  "rows": [
    {
      "cells": [
        "PendingPickCountForPickUpOrders",
        "PendingPickCountForShipmentOrders",
        "PendingPackCount"
      ],
      "line": 369
    },
    {
      "cells": [
        "1",
        "0",
        "0"
      ],
      "line": 370
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 372,
  "name": "manager dashboard api for pickup activity is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 373
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 374
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 376,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRisk",
        "NotStartedButNoRisk",
        "InProgress",
        "Prepared",
        "BeingSorted",
        "NoShow",
        "AwaitPickUp",
        "PickedUp",
        "Cancelled"
      ],
      "line": 377
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "1",
        "0",
        "0",
        "0",
        "null",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 378
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 380,
  "name": "manager dashboard api for pickup activity in units is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 381
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 382
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 384,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRiskUnits",
        "NotStartedUnits",
        "InProgressUnits",
        "PreparedUnits"
      ],
      "line": 385
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "7",
        "7",
        "0",
        "0"
      ],
      "line": 386
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 389,
  "name": "list fulfillments api is called",
  "rows": [
    {
      "cells": [
        "LocationId",
        "TransactionType",
        "DeliveryMethod",
        "Size",
        "Page",
        "Tag"
      ],
      "line": 390
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "PICK",
        "PickUpAtStore",
        "100",
        "0",
        "Tag${SixDigitNumber}"
      ],
      "line": 391
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 393,
  "name": "the data level entity for list fulfillments response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "FulfillmentId",
        "Status",
        "CustomerName",
        "ContainsInstruction",
        "OrderNotes",
        "NbrOfUnits",
        "UOM",
        "Priority",
        "PhoneNumber",
        "Email",
        "MinStatusId",
        "MaxStatusId",
        "NoOfPackages"
      ],
      "line": 394
    },
    {
      "cells": [
        "0",
        "${fulfillmentId}",
        "CREATED",
        "Customer ${RandomNumber}",
        "true",
        "null",
        "7",
        "Units",
        "Not Applicable",
        "(123) 123-1234",
        "${RandomNumber}@manh.com",
        "1000.000",
        "1000.000",
        "null"
      ],
      "line": 395
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 397,
  "name": "generate picklist api is called for location STR1-${RandomNumber}",
  "rows": [
    {
      "cells": [
        "FulfillmentId"
      ],
      "line": 398
    },
    {
      "cells": [
        "${fulfillmentId}"
      ],
      "line": 399
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 401,
  "name": "extract the following expression from last api response list",
  "rows": [
    {
      "cells": [
        "VariableName",
        "VariableExpression"
      ],
      "line": 402
    },
    {
      "cells": [
        "taskGroupId",
        "TaskGroupId"
      ],
      "line": 403
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 405,
  "name": "validate data level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "AssignedTo"
      ],
      "line": 406
    },
    {
      "cells": [
        "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com"
      ],
      "line": 407
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 409,
  "name": "validate Group level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "AreaName1",
        "AreaName2",
        "ItemAttributeValue"
      ],
      "line": 410
    },
    {
      "cells": [
        "0",
        "Floor1",
        "Section1",
        "Casual"
      ],
      "line": 411
    },
    {
      "cells": [
        "1",
        "Floor2",
        "Section1",
        "Formal"
      ],
      "line": 412
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 414,
  "name": "validate Items level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "ItemId",
        "OrderedQty",
        "LargeImageURI",
        "SmallImageURI",
        "Description",
        "Color",
        "Style",
        "Size",
        "UPC"
      ],
      "line": 415
    },
    {
      "cells": [
        "0",
        "0",
        "Item1-${RandomNumber}",
        "2",
        "/largeitem1.jpeg",
        "/smallitem1.jpeg",
        "Kid\u0027s T-Shirt Short Desc",
        "Blck",
        "Casual",
        "M",
        "12341001"
      ],
      "line": 416
    },
    {
      "cells": [
        "1",
        "0",
        "Item2-${RandomNumber}",
        "3",
        "/largeitem2.jpeg",
        "/smallitem2.jpeg",
        "Women\u0027s T-Shirt Short Desc",
        "Grn",
        "Formal",
        "XS",
        "12341002"
      ],
      "line": 417
    },
    {
      "cells": [
        "1",
        "1",
        "Item3-${RandomNumber}",
        "2",
        "/largeitem3.jpeg",
        "/smallitem3.jpeg",
        "Men\u0027s T-Shirt Short Desc",
        "Grn",
        "Formal",
        "XS",
        "12341003"
      ],
      "line": 418
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 420,
  "name": "validate ItemCodes level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "ItemCodes.listValue",
        "ItemCodeValue"
      ],
      "line": 421
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "12341001"
      ],
      "line": 422
    },
    {
      "cells": [
        "0",
        "0",
        "1",
        "56781001"
      ],
      "line": 423
    },
    {
      "cells": [
        "1",
        "0",
        "0",
        "12341002"
      ],
      "line": 424
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "56781002"
      ],
      "line": 425
    },
    {
      "cells": [
        "1",
        "1",
        "0",
        "12341003"
      ],
      "line": 426
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 428,
  "name": "validate Instructions level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "Instructions.listValue",
        "Priority",
        "InstructionText",
        "Quantity"
      ],
      "line": 429
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "1",
        "Pick Instruction: Instruction - Line",
        "2"
      ],
      "line": 430
    },
    {
      "cells": [
        "1",
        "1",
        "0",
        "1",
        "Pick Instruction: Instruction - Line",
        "2"
      ],
      "line": 431
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 433,
  "name": "validate ManufacturingAttributes level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "ManufacturingAttributes.listValue",
        "Upc"
      ],
      "line": 434
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "13571001"
      ],
      "line": 435
    },
    {
      "cells": [
        "0",
        "0",
        "1",
        "24681001"
      ],
      "line": 436
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 438,
  "name": "additional image uri for item Item1-${RandomNumber} is called",
  "keyword": "When "
});
formatter.step({
  "line": 440,
  "name": "validate data level entity for additional image response",
  "rows": [
    {
      "cells": [
        "ItemId"
      ],
      "line": 441
    },
    {
      "cells": [
        "Item1-${RandomNumber}"
      ],
      "line": 442
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 444,
  "name": "validate Media level entity for additional image response",
  "rows": [
    {
      "cells": [
        "Media.listValue",
        "MediaSizeId",
        "MimeTypeId",
        "URI"
      ],
      "line": 445
    },
    {
      "cells": [
        "0",
        "small image",
        ".jpeg",
        "/smallimage/kidstshirt.jpeg"
      ],
      "line": 446
    },
    {
      "cells": [
        "1",
        "large image",
        ".png",
        "/largeimage/kidstshirt.png"
      ],
      "line": 447
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "get fulfillment api is called",
  "rows": [
    {
      "cells": [
        "FulfillmentId"
      ],
      "line": 450
    },
    {
      "cells": [
        "${fulfillmentId}"
      ],
      "line": 451
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 453,
  "name": "validate Fulfillment level entity from previous api response",
  "rows": [
    {
      "cells": [
        "MinStatusId",
        "MaxStatusId"
      ],
      "line": 454
    },
    {
      "cells": [
        "2000.000",
        "2000.000"
      ],
      "line": 455
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 457,
  "name": "validate FulfillmentLine level entity from previous api response",
  "rows": [
    {
      "cells": [
        "FulfillmentLine.Criteria",
        "FulfillmentLineStatusId"
      ],
      "line": 458
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00271\u0027",
        "2000.000"
      ],
      "line": 459
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00272\u0027",
        "2000.000"
      ],
      "line": 460
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00273\u0027",
        "2000.000"
      ],
      "line": 461
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 463,
  "name": "get taskgroup for taskgroupid ${taskGroupId} is called",
  "keyword": "When "
});
formatter.step({
  "line": 465,
  "name": "the data level entity for taskgroup response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "TaskStatusId.TaskStatusId"
      ],
      "line": 466
    },
    {
      "cells": [
        "0",
        "3000.000"
      ],
      "line": 467
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 469,
  "name": "the Task level entity for taskgroup response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "Task.listValue",
        "TaskTypeId.TaskTypeId",
        "TaskStatusId.TaskStatusId"
      ],
      "line": 470
    },
    {
      "cells": [
        "0",
        "0",
        "1000.000",
        "2000.000"
      ],
      "line": 471
    },
    {
      "cells": [
        "0",
        "1",
        "1000.000",
        "2000.000"
      ],
      "line": 472
    },
    {
      "cells": [
        "0",
        "2",
        "1000.000",
        "2000.000"
      ],
      "line": 473
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 475,
  "name": "get pick task detail for taskgroupid ${taskGroupId} is called",
  "keyword": "When "
});
formatter.step({
  "line": 477,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "data.Criteria",
        "Quantity"
      ],
      "line": 478
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "2"
      ],
      "line": 479
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item2-${RandomNumber}\u0027",
        "3"
      ],
      "line": 480
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item3-${RandomNumber}\u0027",
        "2"
      ],
      "line": 481
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 483,
  "name": "menu count api is called",
  "rows": [
    {
      "cells": [
        "OrganizationId",
        "LocationId"
      ],
      "line": 484
    },
    {
      "cells": [
        "${org.sif-Child-Kering-B1-IT}",
        "STR1-${RandomNumber}"
      ],
      "line": 485
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 487,
  "name": "menu count should be",
  "rows": [
    {
      "cells": [
        "PendingPickCountForPickUpOrders",
        "PendingPickCountForShipmentOrders",
        "PendingPackCount"
      ],
      "line": 488
    },
    {
      "cells": [
        "0",
        "0",
        "0"
      ],
      "line": 489
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 491,
  "name": "manager dashboard api for pickup activity is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 492
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 493
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 495,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRisk",
        "NotStartedButNoRisk",
        "InProgress",
        "Prepared",
        "BeingSorted",
        "NoShow",
        "AwaitPickUp",
        "PickedUp",
        "Cancelled"
      ],
      "line": 496
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "0",
        "0",
        "1",
        "0",
        "null",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 497
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 499,
  "name": "manager dashboard api for pickup activity in units is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 500
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 501
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 503,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRiskUnits",
        "NotStartedUnits",
        "InProgressUnits",
        "PreparedUnits"
      ],
      "line": 504
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "0",
        "0",
        "7",
        "0"
      ],
      "line": 505
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 507,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as admin@${org.sif-Child-Kering-B1-IT} and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 509,
  "name": "wait time",
  "rows": [
    {
      "cells": [
        "WaitTime"
      ],
      "line": 510
    },
    {
      "cells": [
        "15000"
      ],
      "line": 511
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 513,
  "name": "the Order should be",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 514
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "3500",
        "3500"
      ],
      "line": 515
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "there should be 3 of OrderLine in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 518
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "3500",
        "3500"
      ],
      "line": 519
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "3500",
        "3500"
      ],
      "line": 520
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "3500",
        "3500"
      ],
      "line": 521
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "there should be 3 of QuantityDetail in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "QuantityDetail.Criteria",
        "Quantity"
      ],
      "line": 524
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00273000\u0027",
        "0"
      ],
      "line": 525
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00273500\u0027",
        "2"
      ],
      "line": 526
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00273000\u0027",
        "0"
      ],
      "line": 527
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00273500\u0027",
        "3"
      ],
      "line": 528
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "StatusId \u003d\u003d \u00273000\u0027",
        "0"
      ],
      "line": 529
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "StatusId \u003d\u003d \u00273500\u0027",
        "2"
      ],
      "line": 530
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 532,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 534,
  "name": "submit pick api is called",
  "rows": [
    {
      "cells": [
        "TaskGroupId",
        "LocationId",
        "IsCompletePick",
        "ItemId",
        "Quantity",
        "QuantityUOM",
        "ShortQuantity"
      ],
      "line": 535
    },
    {
      "cells": [
        "${taskGroupId}",
        "STR1-${RandomNumber}",
        "false",
        "Item1-${RandomNumber}",
        "2",
        "Units",
        "0"
      ],
      "line": 536
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 538,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "data.Criteria",
        "PickedQty"
      ],
      "line": 539
    },
    {
      "cells": [
        "ItemId\u003d\u003d\u0027Item1-${RandomNumber}\u0027",
        "2"
      ],
      "line": 540
    },
    {
      "cells": [
        "ItemId\u003d\u003d\u0027Item2-${RandomNumber}\u0027",
        "null"
      ],
      "line": 541
    },
    {
      "cells": [
        "ItemId\u003d\u003d\u0027Item3-${RandomNumber}\u0027",
        "null"
      ],
      "line": 542
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 544,
  "name": "the following data is extracted from the body of the last api response based on given criteria",
  "rows": [
    {
      "cells": [
        "data.Criteria",
        "VariableName",
        "VariableExpression"
      ],
      "line": 545
    },
    {
      "cells": [
        "ItemId\u003d\u003d\u0027Item1-${RandomNumber}\u0027",
        "taskId",
        "TaskId"
      ],
      "line": 546
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "get taskgroup for taskgroupid ${taskGroupId} is called",
  "keyword": "When "
});
formatter.step({
  "line": 550,
  "name": "the data level entity for taskgroup response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "TaskStatusId.TaskStatusId"
      ],
      "line": 551
    },
    {
      "cells": [
        "0",
        "3000.000"
      ],
      "line": 552
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 554,
  "name": "validate Task level entity from previous api response",
  "rows": [
    {
      "cells": [
        "data.Criteria",
        "Task.Criteria",
        "TaskStatusId.TaskStatusId"
      ],
      "line": 555
    },
    {
      "cells": [
        "TaskStatusId.TaskStatusId \u003d\u003d \u00273000.000\u0027",
        "TaskId \u003d\u003d \u0027${taskId}\u0027",
        "4000.000"
      ],
      "line": 556
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 558,
  "name": "get pick task detail for taskgroupid ${taskGroupId} is called",
  "keyword": "When "
});
formatter.step({
  "line": 560,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "data.Criteria",
        "PickedQty"
      ],
      "line": 561
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "2"
      ],
      "line": 562
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item2-${RandomNumber}\u0027",
        "null"
      ],
      "line": 563
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item3-${RandomNumber}\u0027",
        "null"
      ],
      "line": 564
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 566,
      "value": "#Clear the token map for the user so that the auth token is not read from cache"
    }
  ],
  "line": 567,
  "name": "clear authtoken for user before login",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 568
    },
    {
      "cells": [
        "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com"
      ],
      "line": 569
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "resume pick list api is called",
  "rows": [
    {
      "cells": [
        "LocationId",
        "DeliveryMethodId"
      ],
      "line": 574
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "PickUpAtStore"
      ],
      "line": 575
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 577,
  "name": "validate data level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "TaskGroupId",
        "AssignedTo"
      ],
      "line": 578
    },
    {
      "cells": [
        "${taskGroupId}",
        "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com"
      ],
      "line": 579
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 581,
  "name": "validate Group level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "AreaName1",
        "AreaName2",
        "ItemAttributeValue"
      ],
      "line": 582
    },
    {
      "cells": [
        "0",
        "Floor1",
        "Section1",
        "Casual"
      ],
      "line": 583
    },
    {
      "cells": [
        "1",
        "Floor2",
        "Section1",
        "Formal"
      ],
      "line": 584
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 586,
  "name": "validate Items level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "ItemId",
        "OrderedQty",
        "LargeImageURI",
        "SmallImageURI",
        "Color",
        "Style",
        "Size",
        "UPC"
      ],
      "line": 587
    },
    {
      "cells": [
        "0",
        "0",
        "Item1-${RandomNumber}",
        "2",
        "/largeitem1.jpeg",
        "/smallitem1.jpeg",
        "Blck",
        "Casual",
        "M",
        "12341001"
      ],
      "line": 588
    },
    {
      "cells": [
        "1",
        "0",
        "Item2-${RandomNumber}",
        "3",
        "/largeitem2.jpeg",
        "/smallitem2.jpeg",
        "Grn",
        "Formal",
        "XS",
        "12341002"
      ],
      "line": 589
    },
    {
      "cells": [
        "1",
        "1",
        "Item3-${RandomNumber}",
        "2",
        "/largeitem3.jpeg",
        "/smallitem3.jpeg",
        "Grn",
        "Formal",
        "XS",
        "12341003"
      ],
      "line": 590
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 592,
  "name": "validate ItemCodes level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "ItemCodes.listValue",
        "ItemCodeValue"
      ],
      "line": 593
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "12341001"
      ],
      "line": 594
    },
    {
      "cells": [
        "0",
        "0",
        "1",
        "56781001"
      ],
      "line": 595
    },
    {
      "cells": [
        "1",
        "0",
        "0",
        "12341002"
      ],
      "line": 596
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "56781002"
      ],
      "line": 597
    },
    {
      "cells": [
        "1",
        "1",
        "0",
        "12341003"
      ],
      "line": 598
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 600,
  "name": "validate Instructions level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "Instructions.listValue",
        "Priority",
        "InstructionText",
        "Quantity"
      ],
      "line": 601
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "1",
        "Pick Instruction: Instruction - Line",
        "2"
      ],
      "line": 602
    },
    {
      "cells": [
        "1",
        "1",
        "0",
        "1",
        "Pick Instruction: Instruction - Line",
        "2"
      ],
      "line": 603
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 605,
  "name": "validate ManufacturingAttributes level response for generate or resume pickList",
  "rows": [
    {
      "cells": [
        "Group.listValue",
        "Items.listValue",
        "ManufacturingAttributes.listValue",
        "Upc"
      ],
      "line": 606
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "13571001"
      ],
      "line": 607
    },
    {
      "cells": [
        "0",
        "0",
        "1",
        "24681001"
      ],
      "line": 608
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 610,
  "name": "submit pick api is called",
  "rows": [
    {
      "cells": [
        "TaskGroupId",
        "LocationId",
        "IsCompletePick",
        "ItemId",
        "Quantity",
        "QuantityUOM",
        "ShortQuantity",
        "ReasonCode"
      ],
      "line": 611
    },
    {
      "cells": [
        "${taskGroupId}",
        "STR1-${RandomNumber}",
        "true",
        "Item1-${RandomNumber}",
        "2",
        "Units",
        "",
        ""
      ],
      "line": 612
    },
    {
      "cells": [
        "${taskGroupId}",
        "STR1-${RandomNumber}",
        "true",
        "Item2-${RandomNumber}",
        "2",
        "Units",
        "1",
        "3000.000"
      ],
      "line": 613
    },
    {
      "cells": [
        "${taskGroupId}",
        "STR1-${RandomNumber}",
        "true",
        "Item3-${RandomNumber}",
        "0",
        "Units",
        "2",
        "3000.000"
      ],
      "line": 614
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 616,
  "name": "get taskgroup for taskgroupid ${taskGroupId} is called",
  "keyword": "When "
});
formatter.step({
  "line": 618,
  "name": "the data level entity for taskgroup response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "TaskStatusId.TaskStatusId"
      ],
      "line": 619
    },
    {
      "cells": [
        "0",
        "4000.000"
      ],
      "line": 620
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 622,
  "name": "the Task level entity for taskgroup response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "Task.listValue",
        "TaskTypeId.TaskTypeId",
        "TaskStatusId.TaskStatusId"
      ],
      "line": 623
    },
    {
      "cells": [
        "0",
        "0",
        "1000.000",
        "4000.000"
      ],
      "line": 624
    },
    {
      "cells": [
        "0",
        "1",
        "1000.000",
        "4000.000"
      ],
      "line": 625
    },
    {
      "cells": [
        "0",
        "2",
        "1000.000",
        "4000.000"
      ],
      "line": 626
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 628,
  "name": "get pick task detail for taskgroupid ${taskGroupId} is called",
  "keyword": "When "
});
formatter.step({
  "line": 630,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "data.Criteria",
        "PickedQty"
      ],
      "line": 631
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item1-${RandomNumber}\u0027",
        "2"
      ],
      "line": 632
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item2-${RandomNumber}\u0027",
        "2"
      ],
      "line": 633
    },
    {
      "cells": [
        "ItemId \u003d\u003d \u0027Item3-${RandomNumber}\u0027",
        "0"
      ],
      "line": 634
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 636,
  "name": "get fulfillment api is called",
  "rows": [
    {
      "cells": [
        "FulfillmentId"
      ],
      "line": 637
    },
    {
      "cells": [
        "${fulfillmentId}"
      ],
      "line": 638
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 640,
  "name": "validate Fulfillment level entity from previous api response",
  "rows": [
    {
      "cells": [
        "MinStatusId",
        "MaxStatusId"
      ],
      "line": 641
    },
    {
      "cells": [
        "3000.000",
        "3000.000"
      ],
      "line": 642
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 644,
  "name": "validate FulfillmentLine level entity from previous api response",
  "rows": [
    {
      "cells": [
        "FulfillmentLine.Criteria",
        "PickedQty",
        "CancelledQty",
        "FulfillmentLineStatusId"
      ],
      "line": 645
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00271\u0027",
        "2",
        "0",
        "3000.000"
      ],
      "line": 646
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00272\u0027",
        "2",
        "1",
        "3000.000"
      ],
      "line": 647
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00273\u0027",
        "null",
        "2",
        "9000.000"
      ],
      "line": 648
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 650,
  "name": "create the session map with following details",
  "rows": [
    {
      "cells": [
        "FulfillmentId",
        "IsCustomerOnTheWay"
      ],
      "line": 651
    },
    {
      "cells": [
        "${fulfillmentId}",
        "true"
      ],
      "line": 652
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 654,
  "name": "add the FulfillmentInstruction entity in the session map",
  "rows": [
    {
      "cells": [
        "InstructionText"
      ],
      "line": 655
    },
    {
      "cells": [
        "I am at the basement"
      ],
      "line": 656
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 659,
  "name": "update pickup fulfillments and notify is called",
  "keyword": "And "
});
formatter.step({
  "line": 661,
  "name": "manager dashboard api for pickup activity is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 662
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 663
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 665,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRisk",
        "NotStartedButNoRisk",
        "InProgress",
        "Prepared",
        "BeingSorted",
        "NoShow",
        "AwaitPickUp",
        "PickedUp",
        "Cancelled",
        "CurbsideWithCustomerOnTheWay"
      ],
      "line": 666
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "0",
        "0",
        "0",
        "1",
        "null",
        "0",
        "1",
        "0",
        "0",
        "1"
      ],
      "line": 667
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 669,
  "name": "manager dashboard api for pickup activity in units is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 670
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 671
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 673,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRiskUnits",
        "NotStartedUnits",
        "InProgressUnits",
        "PreparedUnits"
      ],
      "line": 674
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "0",
        "0",
        "0",
        "7"
      ],
      "line": 675
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 677,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as admin@${org.sif-Child-Kering-B1-IT} and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "wait time",
  "rows": [
    {
      "cells": [
        "WaitTime"
      ],
      "line": 680
    },
    {
      "cells": [
        "15000"
      ],
      "line": 681
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 683,
  "name": "the Order should be",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 684
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "1500",
        "3600"
      ],
      "line": 685
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "there should be 3 of OrderLine in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 688
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "3600",
        "3600"
      ],
      "line": 689
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "1500",
        "3600"
      ],
      "line": 690
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "1500",
        "1500"
      ],
      "line": 691
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 693,
  "name": "there should be 3 of QuantityDetail in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "QuantityDetail.Criteria",
        "Quantity"
      ],
      "line": 694
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00273500\u0027",
        "0"
      ],
      "line": 695
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00273600\u0027",
        "2"
      ],
      "line": 696
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00273500\u0027",
        "0"
      ],
      "line": 697
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00273600\u0027",
        "2"
      ],
      "line": 698
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00271500\u0027",
        "1"
      ],
      "line": 699
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "StatusId \u003d\u003d \u00273500\u0027",
        "0"
      ],
      "line": 700
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "StatusId \u003d\u003d \u00271500\u0027",
        "2"
      ],
      "line": 701
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 703,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 705,
  "name": "list fulfillments api is called",
  "rows": [
    {
      "cells": [
        "LocationId",
        "TransactionType",
        "DeliveryMethod",
        "Size",
        "Page",
        "Keyword"
      ],
      "line": 706
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "PICKUP",
        "PickUpAtStore",
        "100",
        "0",
        "(123) 123-1234"
      ],
      "line": 707
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 709,
  "name": "the data level entity for list fulfillments response should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "FulfillmentId",
        "Status",
        "CustomerName",
        "ContainsInstruction",
        "OrderNotes",
        "NbrOfUnits",
        "UOM",
        "Priority",
        "PhoneNumber",
        "Email",
        "MinStatusId",
        "MaxStatusId",
        "NoOfPackages",
        "IsAtRisk"
      ],
      "line": 710
    },
    {
      "cells": [
        "0",
        "${fulfillmentId}",
        "PICKED",
        "Customer ${RandomNumber}",
        "true",
        "I am at the basement",
        "7",
        "Units",
        "Not Applicable",
        "(123) 123-1234",
        "${RandomNumber}@manh.com",
        "3000.000",
        "3000.000",
        "null",
        "false"
      ],
      "line": 711
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 713,
  "name": "fulfillment details for pickup api is called",
  "rows": [
    {
      "cells": [
        "LocationId",
        "FulfillmentId"
      ],
      "line": 714
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "${fulfillmentId}"
      ],
      "line": 715
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 717,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "NbrOfUnits",
        "Fulfillment.FulfillmentId",
        "Fulfillment.CustomerFirstName",
        "Fulfillment.CustomerLastName",
        "Fulfillment.CustomerPhone",
        "Fulfillment.CustomerEmail",
        "Fulfillment.MinStatusId",
        "Fulfillment.MaxStatusId"
      ],
      "line": 718
    },
    {
      "cells": [
        "4",
        "${fulfillmentId}",
        "Customer",
        "${RandomNumber}",
        "(123) 123-1234",
        "${RandomNumber}@manh.com",
        "3000.000",
        "3000.000"
      ],
      "line": 719
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 721,
  "name": "validate FulfillmentLine level entity from previous api response",
  "rows": [
    {
      "cells": [
        "Fulfillment.FulfillmentLine.Criteria",
        "ItemId",
        "PickedQty",
        "OrderedQty",
        "SortedQty",
        "IsGift",
        "ItemDescription",
        "UPC",
        "Item.SmallImageURI",
        "Item.WebURL"
      ],
      "line": 722
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00271\u0027",
        "Item1-${RandomNumber}",
        "2",
        "2",
        "null",
        "true",
        "Kid\u0027s T-Shirt Short Desc",
        "12341001",
        "/smallitem1.jpeg",
        "https://images.com/item1.png"
      ],
      "line": 723
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00272\u0027",
        "Item2-${RandomNumber}",
        "2",
        "3",
        "null",
        "false",
        "Women\u0027s T-Shirt Short Desc",
        "12341002",
        "/smallitem2.jpeg",
        "https://images.com/item2.png"
      ],
      "line": 724
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00273\u0027",
        "Item3-${RandomNumber}",
        "null",
        "2",
        "null",
        "true",
        "Men\u0027s T-Shirt Short Desc",
        "12341003",
        "/smallitem3.jpeg",
        "https://images.com/item3.png"
      ],
      "line": 725
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 727,
  "name": "confirm customer pickup",
  "rows": [
    {
      "cells": [
        "LocationId",
        "FulfillmentId",
        "FulfillmentPickupConfirmation.FirstName",
        "FulfillmentPickupConfirmation.LastName",
        "FulfillmentPickupConfirmation.Email",
        "FulfillmentPickupConfirmation.Phone",
        "FulfillmentPickupConfirmation.DocTypeVerified",
        "FulfillmentPickupConfirmation.PickupComments",
        "FulfillmentPickupConfirmation.CustomerSignature"
      ],
      "line": 728
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "${fulfillmentId}",
        "Customer",
        "${RandomNumber}",
        "Customer ${RandomNumber}",
        "(123) 123-1234",
        "true",
        "Received in good condition",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAIVCAYAAACgOyZzAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAIABJREFUeJzt3XmcXGWV//HvudUJWUCi/kZwRiUuuA2GJdWVRDOTRJRNUBmVsElQgYCMokh6iTJtq5CuShDRUcCFbYaoURwRHAYBk2AkSVWFsP9GBAnoz2VmHGRJCOmue35/dLrThCRdy711q6o/79fLl6/uuve5x7b75LnPch4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCsLOkAYrVk7VR1z9qUdBjAmJHL97zg61Lp2kb+GwySDiA22eI8pdrWqa/4mqRDAcaEweQ3d/hr9ylKta1Tbv1RicTT88Deo13SVo846i5bnCfz7yq0D6or/"
      ],
      "line": 729
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 731,
  "name": "validate the last api response should not be null",
  "keyword": "Then "
});
formatter.step({
  "line": 733,
  "name": "get fulfillment api is called",
  "rows": [
    {
      "cells": [
        "FulfillmentId"
      ],
      "line": 734
    },
    {
      "cells": [
        "${fulfillmentId}"
      ],
      "line": 735
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 737,
  "name": "validate Fulfillment level entity from previous api response",
  "rows": [
    {
      "cells": [
        "MinStatusId",
        "MaxStatusId"
      ],
      "line": 738
    },
    {
      "cells": [
        "6000.000",
        "6000.000"
      ],
      "line": 739
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 741,
  "name": "validate FulfillmentLine level entity from previous api response",
  "rows": [
    {
      "cells": [
        "FulfillmentLine.Criteria",
        "FulfillmentLineStatusId"
      ],
      "line": 742
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00271\u0027",
        "6000.000"
      ],
      "line": 743
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00272\u0027",
        "6000.000"
      ],
      "line": 744
    },
    {
      "cells": [
        "OrderLineId \u003d\u003d \u00273\u0027",
        "9000.000"
      ],
      "line": 745
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 747,
  "name": "manager dashboard api for pickup activity is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 748
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 749
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 751,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRisk",
        "NotStartedButNoRisk",
        "InProgress",
        "Prepared",
        "BeingSorted",
        "NoShow",
        "AwaitPickUp",
        "PickedUp",
        "Cancelled"
      ],
      "line": 752
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "0",
        "0",
        "0",
        "1",
        "null",
        "0",
        "0",
        "1",
        "0"
      ],
      "line": 753
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 755,
  "name": "manager dashboard api for pickup activity in units is called",
  "rows": [
    {
      "cells": [
        "LocationId"
      ],
      "line": 756
    },
    {
      "cells": [
        "STR1-${RandomNumber}"
      ],
      "line": 757
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 759,
  "name": "the data level entity for manager dashboard count should contain",
  "rows": [
    {
      "cells": [
        "data.listValue",
        "StoreId",
        "NotStartedButAtRiskUnits",
        "NotStartedUnits",
        "InProgressUnits",
        "PreparedUnits"
      ],
      "line": 760
    },
    {
      "cells": [
        "0",
        "STR1-${RandomNumber}",
        "0",
        "0",
        "0",
        "7"
      ],
      "line": 761
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 764,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as admin@${org.sif-Child-Kering-B1-IT} and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 766,
  "name": "wait time",
  "rows": [
    {
      "cells": [
        "WaitTime"
      ],
      "line": 767
    },
    {
      "cells": [
        "15000"
      ],
      "line": 768
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 770,
  "name": "the Order should be",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 771
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "1500",
        "7000"
      ],
      "line": 772
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 774,
  "name": "there should be 3 of OrderLine in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "MinFulfillmentStatusId",
        "MaxFulfillmentStatusId"
      ],
      "line": 775
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "7000",
        "7000"
      ],
      "line": 776
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "1500",
        "7000"
      ],
      "line": 777
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "1500",
        "1500"
      ],
      "line": 778
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 780,
  "name": "there should be 3 of QuantityDetail in the Order with following details",
  "rows": [
    {
      "cells": [
        "Order.Criteria",
        "OrderLine.Criteria",
        "QuantityDetail.Criteria",
        "Quantity"
      ],
      "line": 781
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00273600\u0027",
        "0"
      ],
      "line": 782
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00271\u0027",
        "StatusId \u003d\u003d \u00277000\u0027",
        "2"
      ],
      "line": 783
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00273600\u0027",
        "0"
      ],
      "line": 784
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00277000\u0027",
        "2"
      ],
      "line": 785
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00272\u0027",
        "StatusId \u003d\u003d \u00271500\u0027",
        "1"
      ],
      "line": 786
    },
    {
      "cells": [
        "OrderId \u003d\u003d \u0027OrdM${RandomNumber}\u0027",
        "OrderLineId\u003d\u003d\u00273\u0027",
        "StatusId \u003d\u003d \u00271500\u0027",
        "2"
      ],
      "line": 787
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 791,
  "name": "get instock inventory details for item",
  "rows": [
    {
      "cells": [
        "LocationId",
        "ItemId"
      ],
      "line": 792
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "Item1-${RandomNumber}"
      ],
      "line": 793
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 795,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "ItemDetails.InStockQuantity"
      ],
      "line": 796
    },
    {
      "cells": [
        "98"
      ],
      "line": 797
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 799,
  "name": "get instock inventory details for item",
  "rows": [
    {
      "cells": [
        "LocationId",
        "ItemId"
      ],
      "line": 800
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "Item2-${RandomNumber}"
      ],
      "line": 801
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 803,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "ItemDetails.InStockQuantity"
      ],
      "line": 804
    },
    {
      "cells": [
        "48"
      ],
      "line": 805
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 807,
  "name": "get instock inventory details for item",
  "rows": [
    {
      "cells": [
        "LocationId",
        "ItemId"
      ],
      "line": 808
    },
    {
      "cells": [
        "STR1-${RandomNumber}",
        "Item3-${RandomNumber}"
      ],
      "line": 809
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 811,
  "name": "validate data level entity from previous api response",
  "rows": [
    {
      "cells": [
        "ItemDetails.InStockQuantity"
      ],
      "line": 812
    },
    {
      "cells": [
        "25"
      ],
      "line": 813
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 815,
  "name": "login to ${org.sif-Child-Kering-B1-IT} as admin@${org.sif-Child-Kering-B1-IT} and ${sif.user.password}",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "delete tag api is called for tagid Tag${SixDigitNumber}",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.java:103"
});
formatter.result({
  "duration": 2066904700,
  "status": "passed"
});
formatter.match({
  "location": "SIFStepDefinitions.java:82"
});
formatter.result({
  "duration": 162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Role",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "duration": 522844100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grant",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "duration": 502297000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "duration": 4652551800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserRole",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "duration": 381447900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "admin@${org.sif-Child-Kering-B1-IT}",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 82
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "duration": 622849200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "duration": 2444300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LocationContact",
      "offset": 4
    },
    {
      "val": "Location",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "duration": 130995800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "duration": 425975200,
  "error_message": "java.lang.RuntimeException: InvocationTargetException while invoking method saveTransientEntities - org.springframework.web.client.HttpServerErrorException: 500 Internal Server Error\r\n\tat com.manh.cp.endtoend.common.MapBuilder.invokeMethod(MapBuilder.java:1200)\r\n\tat com.manh.cp.endtoend.builders.EntityBuilders.saveTransientEntities(EntityBuilders.java:267)\r\n\tat com.manh.cp.endtoend.steps.StepDefinitions.lambda$new$10(StepDefinitions.java:212)\r\n\tat ✽.And the Location is saved(sif.demo-org/003-customer-pickup-e2e.feature:59)\r\nCaused by: org.springframework.web.client.HttpServerErrorException: 500 Internal Server Error\r\n\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java:97)\r\n\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java:79)\r\n\tat org.springframework.web.client.ResponseErrorHandler.handleError(ResponseErrorHandler.java:63)\r\n\tat org.springframework.web.client.RestTemplate.handleResponse(RestTemplate.java:766)\r\n\tat org.springframework.web.client.RestTemplate.doExecute(RestTemplate.java:724)\r\n\tat org.springframework.web.client.RestTemplate.execute(RestTemplate.java:680)\r\n\tat org.springframework.web.client.RestTemplate.exchange(RestTemplate.java:600)\r\n\tat com.manh.cp.endtoend.common.TestRestTemplate.exchange(TestRestTemplate.java:50)\r\n\tat com.manh.cp.endtoend.util.RestUtil.callHttpPostImport(RestUtil.java:193)\r\n\tat com.manh.cp.endtoend.common.MapBuilder.importEntityMaps(MapBuilder.java:495)\r\n\tat com.manh.cp.endtoend.common.MapBuilder.saveTransientEntities(MapBuilder.java:327)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat com.manh.cp.endtoend.common.MapBuilder.invokeMethod(MapBuilder.java:1191)\r\n\tat com.manh.cp.endtoend.builders.EntityBuilders.saveTransientEntities(EntityBuilders.java:267)\r\n\tat com.manh.cp.endtoend.steps.StepDefinitions.lambda$new$10(StepDefinitions.java:212)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.Java8StepDefinition.execute(Java8StepDefinition.java:115)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.ExtendedRuntime.runStep(ExtendedRuntime.java:319)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:237"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserLocation",
      "offset": 4
    },
    {
      "val": "User",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Inventory.Location",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Inventory.LocationAttributes",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemCodeType",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Item",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Media",
      "offset": 4
    },
    {
      "val": "Item",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemCode",
      "offset": 4
    },
    {
      "val": "Item",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturingAttribute",
      "offset": 4
    },
    {
      "val": "Item",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Item",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemPrice",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerPaymentMethod",
      "offset": 4
    },
    {
      "val": "Customer",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerAddress",
      "offset": 4
    },
    {
      "val": "Customer",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerAttribute",
      "offset": 4
    },
    {
      "val": "Customer",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerAlternateId",
      "offset": 4
    },
    {
      "val": "Customer",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AllocationConfig",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AllocationSource",
      "offset": 4
    },
    {
      "val": "AllocationConfig",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AllocationConfig",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AllocationRuleCondition",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AllocationSourceToCondition",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ReleaseConfig",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ReleaseRuleCondition",
      "offset": 4
    },
    {
      "val": "ReleaseConfig",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ReleaseConfig",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NoteType",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.java:361"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:109"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Supply",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:109"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Supply",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:109"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Supply",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:149"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemAttributeDefinition",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:166"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AreaDefinition",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AreaItemMap",
      "offset": 4
    },
    {
      "val": "AreaDefinition",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AreaDefinition",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentConfiguration",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.java:594"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentConfiguration",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.java:594"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentConfiguration",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.java:594"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentConfiguration",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.java:594"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:139"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderTaxDetail",
      "offset": 4
    },
    {
      "val": "Order",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentMethod",
      "offset": 4
    },
    {
      "val": "Order",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentTransaction",
      "offset": 4
    },
    {
      "val": "Order",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderLine",
      "offset": 4
    },
    {
      "val": "Order",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderLineTaxDetail",
      "offset": 4
    },
    {
      "val": "Order",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderLineNote",
      "offset": 4
    },
    {
      "val": "Order",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.java:203"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:212"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.java:786"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:237"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "OrderLine",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "QuantityDetail",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:150"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:152"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:152"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:151"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulfillment",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentLine",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentLineInstruction",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:153"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 109
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:83"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:84"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:85"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:86"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:88"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:89"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STR1-${RandomNumber}",
      "offset": 45
    }
  ],
  "location": "SIFStepDefinitions.java:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:152"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Group",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Items",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemCodes",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Instructions",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturingAttributes",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Item1-${RandomNumber}",
      "offset": 30
    }
  ],
  "location": "SIFStepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:108"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Media",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:108"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:151"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulfillment",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentLine",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${taskGroupId}",
      "offset": 30
    }
  ],
  "location": "SIFStepDefinitions.java:93"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:94"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Task",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:94"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${taskGroupId}",
      "offset": 37
    }
  ],
  "location": "SIFStepDefinitions.java:100"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:83"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:84"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:85"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:86"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "admin@${org.sif-Child-Kering-B1-IT}",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 82
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.java:786"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:237"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "OrderLine",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "QuantityDetail",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 109
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:102"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:127"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${taskGroupId}",
      "offset": 30
    }
  ],
  "location": "SIFStepDefinitions.java:93"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:94"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Task",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${taskGroupId}",
      "offset": 37
    }
  ],
  "location": "SIFStepDefinitions.java:100"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.java:944"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 109
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:104"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Group",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Items",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemCodes",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Instructions",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturingAttributes",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:105"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:102"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${taskGroupId}",
      "offset": 30
    }
  ],
  "location": "SIFStepDefinitions.java:93"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:94"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Task",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:94"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${taskGroupId}",
      "offset": 37
    }
  ],
  "location": "SIFStepDefinitions.java:100"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:151"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulfillment",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentLine",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:129"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentInstruction",
      "offset": 8
    }
  ],
  "location": "SIFStepDefinitions.java:130"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "SIFStepDefinitions.java:85"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:86"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "admin@${org.sif-Child-Kering-B1-IT}",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 82
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.java:786"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:237"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "OrderLine",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "QuantityDetail",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 109
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:88"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:89"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:116"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentLine",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:120"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:115"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:151"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulfillment",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FulfillmentLine",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:85"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:86"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    }
  ],
  "location": "SIFStepDefinitions.java:87"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "admin@${org.sif-Child-Kering-B1-IT}",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 82
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.java:786"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.java:237"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "OrderLine",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "QuantityDetail",
      "offset": 21
    },
    {
      "val": "Order",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.java:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "strassociate1${RandomNumber}@${org.sif-Child-Kering-B1-IT}.com",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 109
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:154"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:154"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIFStepDefinitions.java:154"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 9
    }
  ],
  "location": "SIFStepDefinitions.java:126"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "${org.sif-Child-Kering-B1-IT}",
      "offset": 9
    },
    {
      "val": "admin@${org.sif-Child-Kering-B1-IT}",
      "offset": 42
    },
    {
      "val": "${sif.user.password}",
      "offset": 82
    }
  ],
  "location": "StepDefinitions.java:107"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag${SixDigitNumber}",
      "offset": 35
    }
  ],
  "location": "SIFStepDefinitions.java:155"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 757500,
  "status": "passed"
});
formatter.after({
  "duration": 8878900,
  "status": "passed"
});
formatter.after({
  "duration": 194400,
  "status": "passed"
});
formatter.after({
  "duration": 139600,
  "status": "passed"
});
});