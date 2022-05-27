beforeEach(() => {
  cy.visit("/");
});

/* -------------------------------------------------------------------------- */
/*                                   Positive Cases                           */
/* -------------------------------------------------------------------------- */

xdescribe("Should display the calculator", () => {
  it("should show the calculator on the screen", () => {
    cy.get(".body").should("exist");
  });

  it("should show all of the calculator buttons", () => {
    cy.get(".inputs__button").should("have.length", 20);
  });
});

/* ----------------------------- Simulate a User ---------------------------- */

xdescribe("Should perform addition", () => {
  it("should calculate single digit addition, 1 + 2 = 3", () => {
    cy.get("#1").click();
    cy.get("#add").click();
    cy.get("#2").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 3);
  });

  it("should calculate double digit addition, 10 + 20 = 30", () => {
    cy.get("#1").click();
    cy.get("#0").click();
    cy.get("#add").click();
    cy.get("#2").click();
    cy.get("#0").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 30);
  });
});

xdescribe("Should perform subtraction", () => {
  it("should calculate single digit subtraction, 3 - 2 = 1", () => {
    cy.get("#3").click();
    cy.get("#subtract").click();
    cy.get("#2").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 1);
  });

  it("should calculate double digit subtraction, 30 - 20 = 10", () => {
    cy.get("#3").click();
    cy.get("#0").click();
    cy.get("#subtract").click();
    cy.get("#2").click();
    cy.get("#0").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 10);
  });
});

xdescribe("Should perform multiplication", () => {
  it("should calculate single digit multiplication, 3 x 2 = 6", () => {
    cy.get("#3").click();
    cy.get("#multiply").click();
    cy.get("#2").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 6);
  });

  it("should calculate double digit multiplication, 10 x 20 = 200", () => {
    cy.get("#1").click();
    cy.get("#0").click();
    cy.get("#multiply").click();
    cy.get("#2").click();
    cy.get("#0").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 200);
  });
});

xdescribe("Should perform division", () => {
  it("should calculate single digit division, 6 / 3 = 2", () => {
    cy.get("#6").click();
    cy.get("#divide").click();
    cy.get("#3").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 2);
  });

  it("should calculate double digit division, 22 / 11 = 2", () => {
    cy.get("#2").click();
    cy.get("#2").click();
    cy.get("#divide").click();
    cy.get("#1").click();
    cy.get("#1").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 2);
  });
});

xdescribe("Should function with negative sign at the start", () => {
  it("should calculate single digital addition, -1 + 3 = 2", () => {
    cy.get("#plus-minus").click();
    cy.get("#1").click();
    cy.get("#add").click();
    cy.get("#3").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", 2);
  });

  it("should calculate single digital subtraction, -1 - 3 = -4", () => {
    cy.get("#plus-minus").click();
    cy.get("#1").click();
    cy.get("#subtract").click();
    cy.get("#3").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", -4);
  });

  it("should calculate single digital multiplication, -1 x 3 = -3", () => {
    cy.get("#plus-minus").click();
    cy.get("#1").click();
    cy.get("#multiply").click();
    cy.get("#3").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", -3);
  });

  it("should calculate single digital division, -6 / 3 = -2", () => {
    cy.get("#plus-minus").click();
    cy.get("#6").click();
    cy.get("#divide").click();
    cy.get("#3").click();
    cy.get("#equals").click();

    cy.get(".display__current > p").should("have.text", -2);
  });
});

xdescribe("Should clear all displays on AC push", () => {
  it("should clear current display, 1 + 1 = 2 AC -> '' ", () => {
    cy.get("#1").click();
    cy.get("#add").click();
    cy.get("#1").click();
    cy.get("#equals").click();
    cy.get("#AC").click();

    cy.get(".display__current").should("have.text", "");
  });
});


/* -------------------------------------------------------------------------- */
/*                               Negative Cases                               */
/* -------------------------------------------------------------------------- */

// Pressing buttons out of order
    // Operations at the start
// Pressing operator twice
// Multiple decimal points

xdescribe("Should not be able to divide by 0", () => {
    it("should display infinity when divided by 0", () => {
        cy.get("#1").click();
        cy.get("#divide").click();
        cy.get("#0").click();
        cy.get("#equals").click();

        cy.get(".display__current").should("have.text", "Infinity");
    })
})