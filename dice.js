Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "clockwork", name: "Clockwork Dice Set"}, false);
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d4.glb",
		system: "clockwork"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d6.glb",
		system: "clockwork"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d8.glb",
		system: "clockwork"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d10.glb",
		system: "clockwork"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d12.glb",
		system: "clockwork"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d20.glb",
		system: "clockwork"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/beyond-dice/dice/clockwork/d100.glb",
		system: "clockwork"
	});
});
