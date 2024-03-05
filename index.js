import { ZenEngine } from "@gorules/zen-engine";
import fs from "fs/promises";

const main = async () => {
  // Decision Table Node

  /* const content = await fs.readFile("./decisionTable.json");
  const engine = new ZenEngine();

  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    myInp: {
      num1: 1,
      num2: 0,
    },
  }); */

  // Function Node

  /* const content = await fs.readFile("./functionNode.json");
  const engine = new ZenEngine();

  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    numbers: [1, 2, 3, 4],
  }); */

  // Expression Node

  /* const content = await fs.readFile("./expressionNode.json");
  const engine = new ZenEngine();

  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    transaction: {
      amount: 1900,
    },
  });
  console.log(result); */

  // Complex Graph - Switch Node with Decision Tables

  const content = await fs.readFile("./switchNode.json");
  const engine = new ZenEngine();

  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    company: {
      type: "Corp",
      name: "Liberty Global Enterprises, Inc.",
    },
  });
  console.log(result);
};

main();
